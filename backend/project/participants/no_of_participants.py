from app import app
from flask_restful import Resource
from flask import json,request,jsonify
from database.database import Event,db,Team_participate,Participants

class no_of_participants(Resource):
    def post(self):
        data=json.loads(request.data)
        team=Event.query.filter(event_name=data['event_name']).first()
        if team.team is not None:
            count=db.session.query(Team_participate).filter_by(event_name=data['event_name']).group_by(Team_participate.team_name).count()
            return jsonify({"successful":count})
        elif team.team==None:
            count=db.session.query(Participants).filter_by(**{data['event_name']:1}).count()
            return jsonify({"successful":count})
            