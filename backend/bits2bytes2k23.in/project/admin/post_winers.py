from app import app
from database.database import User,Winers,db,Team_participate
from flask_restful import Resource
from authentication.token_validation import token_validation_admin
from flask import json,request,jsonify

class winers(Resource): #done
    @token_validation_admin
    def post(self):
        data=json.loads(request.data)
        if 'winers' not in data:
            winer=4
        else: 
            winer=data['winers']
        if 'roll' in data:
            ch=Winers.query.filter(Winers.roll==data['roll'],Winers.event_name==data['event_name'],Winers.winers==winer)
            if ch:
                return jsonify({"error":"already exist"})
            user=Winers(roll=data['roll'],event_name=data['event_name'],winers=winer)
            db.session.add(user)
            db.session.commit()
            return jsonify({"success":"successfully added"})
        else:
            ch=Winers.query.filter(Winers.team==data['team_name'],Winers.event_name==data['event_name'],Winers.winers==winer)
            if ch:
                return jsonify({"error":"already exist"})
            check=Winers(team=data['team_name'],event_name=data['event_name'],winers=winer)
            db.session.add(check)
            db.session.commit()
            return jsonify({"success":"successfully added"})

