from app import app
import json
from flask import request,jsonify
from authentication.token_validation import token_validation_admin
from database.database import Participants,User,db
from flask_restful import Resource

class veiw_participents(Resource): #still done
    @token_validation_admin
    def post(self):
        data=json.loads(request.data)
        return common(data)
    
def common(data):
    event=data['event_name'].lower()
    roll=Participants.query.filter_by(**{event:1}).all()
    participants = []
    for x in roll:
        participants.append({
        'name': x.fname+" "+x.lname,
        'roll': x.roll,
        'email': x.email,
        'mobile': x.mobile,
        'year': x.year,
        'stream': x.stream
    })
    return jsonify(participants)
    