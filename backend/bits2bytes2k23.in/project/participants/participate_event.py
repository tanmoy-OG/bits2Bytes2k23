from app import app
from database.database import Participants,db,User,Event,Team_participate
from flask import json, request,jsonify
from authentication.token_validation import token_validation_participents
from flask_restful import Resource
import jwt
from key.keys import participants_secret_key,authorization_token_key
from sqlalchemy import text

class Participate(Resource): #done
    @token_validation_participents
    def post(self):
        data=json.loads(request.data)
        token=request.headers.get(authorization_token_key)
        main_data=jwt.decode(token,participants_secret_key,algorithms=['HS256'])
        roll_obj=User.query.filter_by(email=main_data['email']).first()
        event_type=Event.query.filter_by(event_name=data['event_name']).first()
        if event_type.team==1:
            event=Team_participate(roll=roll_obj.roll,event_name=data['event_name'],team_name=data['team_name'])
            db.session.add(event)
            db.session.commit()
        else:
            event=Participants(roll=roll_obj.roll,event_name=data['event_name'])
            db.session.add(event)
            db.session.commit()
        return jsonify({"successfull":"participated successfully"})


  