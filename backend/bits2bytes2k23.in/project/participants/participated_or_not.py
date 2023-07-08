from app import app
from database.database import Participants,Team_participate,db,Event,User
from flask_restful import Resource
from flask import json,request
import jwt
from key.keys import participants_secret_key,authorization_token_key
from authentication.token_validation import token_validation_participents

class praricipated_or_not(Resource): #done
    @token_validation_participents
    def post(self):
        data=json.loads(request.data)
        token=request.headers.get(authorization_token_key)
        email=jwt.decode(token,participants_secret_key,algorithms=['HS256'])
        roll=User.query.filter_by(email=email['email']).first()
        event=Event.query.filter_by(event_name=data['event_name']).first()
        if event.team==1:
            user=Team_participate.query.filter_by(roll=roll.roll).filter(Team_participate.event_name==data['event_name']).first()
            if user:
                return True
            else:
                return False
        else:
            user=Participants.query.filter(Participants.roll==roll.roll,Participants.event_name==data['event_name']).first()
            if user:
                return True
            else:
                return False