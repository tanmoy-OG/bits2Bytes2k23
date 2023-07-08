from app import app
from flask_restful import Resource
from flask import request,json,jsonify
from database.database import Winers,User,Event,Team_participate

class win(Resource): #done
    def post(self):
        data=json.loads(request.data)
        event=Event.query.filter_by(event_name=data['event_name']).first()
        winers=Winers.query.filter_by(event_name=data['event_name']).order_by(Winers.winers).all()
        win=[]
        if event.team==0:
            for x in winers:
                user=User.query.filter_by(roll=x.roll).first()
                win.append(
                    {"name":f"{user.fname}"+" "+f"{user.lname}",
                    "roll":x.roll,
                    "year":user.year,
                    "stream":f"{user.stream}",
                    "position":x.winers}
                )
        else:
            winer=Winers.query.filter_by(event_name=data['event_name']).order_by(Winers.winers).all()
            for x in winer:
                user=Team_participate.query.filter(Team_participate.event_name==x.event_name,Team_participate.team_name==x.team).all()
                for y in user:
                    slow=User.query.filter_by(roll=y.roll).first()
                    win.append(
                        {"name":f"{slow.fname}"+" "+f"{slow.lname}",
                        "roll":slow.roll,
                        "year":slow.year,
                        "stream":f"{slow.stream}",
                        "team_name":f"{x.team}",
                        "position":x.winers}
                    )
        return jsonify(win)
        