from app import app
import json
from flask import request,jsonify
from authentication.token_validation import token_validation_admin
from database.database import Participants,User,db,Event,Team_participate
from flask_restful import Resource

class veiw_participents(Resource): #done
    @token_validation_admin
    def post(self):
        data=json.loads(request.data)
        return common(data)
    
def common(data):
    event=data['event_name'].lower()
    type=Event.query.filter_by(event_name=data['event_name']).first()
    participants = []
    i=0
    if type.team==0:
        roll=Participants.query.filter_by(event_name=data['event_name']).all()
        for x in roll:
            user=User.query.filter_by(roll=roll[i].roll).first()
            i=i+1
            participants.append({
            'name': user.fname+" "+user.lname,
            'roll': user.roll,
            'email': user.email,
            'mobile': user.mobile,
            'year': user.year,
            'stream': user.stream
        })
        return jsonify(participants)
    else:
        roll=Team_participate.query.filter_by(event_name=data['event_name']).order_by(Team_participate.team_name).all()
        for x in roll:
            user=User.query.filter_by(roll=roll[i].roll).first()
            participants.append({
            'name': user.fname+" "+user.lname,
            'roll': user.roll,
            'email': user.email,
            'mobile': user.mobile,
            'year': user.year,
            'stream': user.stream,
            'team_name': x.team_name
        })
    return jsonify(participants)
    