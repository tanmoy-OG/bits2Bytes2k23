from app import app
from flask import json,request, jsonify
from database.database import Event,db
from sqlalchemy import text
from authentication.token_validation import token_validation_admin
from flask_restful import Resource

def add_column(column_name):
    query=text(f"ALTER TABLE Participants ADD COLUMN {column_name} INTEGER")
    db.engine.execute(query)
    db.session.commit()

class post_event(Resource): # still done but correct the event name !!!
    @token_validation_admin
    def post(self):
        data=json.loads(request.data)
        temp=Event.query.filter_by(event_name=data['event_name'].lower()).first()
        if temp:
            return jsonify({'error':'the event already exist'})
        else:
            event_pic=request.files['event_pic']
            event_pic.filename=data['event_name']+event_pic.filename[-4]
            event_pic.save('images/'+event_pic.filename)
            event=Event(event_name=data['event_name'],event_date=data['event_date'],about_event=['about_event'],event_pic=event_pic.filename,team=data['team'])
            db.session.add(event)
            db.session.commit()
            add_column(data['event_name'])
            return jsonify({'successful':'the event post successfully'})



