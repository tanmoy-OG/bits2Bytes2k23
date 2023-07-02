from app import app
from database.database import User,Winers,db,Team_participate
from flask_restful import Resource
from authentication.token_validation import token_validation_admin
from flask import json,request,jsonify

class winers(Resource):
    @token_validation_admin
    def post(self):
        data=json.loads(request.data)
        if data['winers']==None:
            winer=4
        else: 
            winer=data['winer']
        if 'roll' in data and len(data)==3:
            user=Winers(roll=data['roll'],event_name=data['event_name'],winers=winer)
            db.session.commit()
            return jsonify({"success":"successfully add"})
        else:
            team=Team_participate.query.filter_by(team_name=data['team']).all()
            for x in team:
                check=Winers(roll=x.roll,event_name=data['event_name'],winers=winer)
                db.session.add(check)
            db.session.commit()
            jsonify({"success":"successfully add"})

