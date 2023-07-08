from app import app
from flask import json,request, jsonify
from database.database import Event,db,Participants
from sqlalchemy import text
from authentication.token_validation import token_validation_admin
from flask_restful import Resource
import os
from sqlalchemy import Column, String,Table

app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg'}

class post_event(Resource): #done
    @token_validation_admin
    def post(self):
        if 'image' not in request.files or 'json' not in request.files:
         return jsonify({'error': 'Image and JSON data are required.'})

        event_pic = request.files['image']
        json_data = request.files['json']
        data=json.loads(json_data.read())
        temp=Event.query.filter_by(event_name=data['event_name'].lower()).first()

        if temp:
            return jsonify({'error':'the event already exist'})
        else:
            event_pic.filename=data['event_name']+event_pic.filename[-4:]
            event_pic.save('images/'+event_pic.filename)
            event=Event(event_name=data['event_name'],event_date=data['event_date'],about_event=data['about_event'],team=data['team'],event_pic=event_pic.filename)
            db.session.add(event)
            db.session.commit()
            return jsonify({'successful':'the event post successfully'})




