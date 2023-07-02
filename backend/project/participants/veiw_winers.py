from app import app
from flask_restful import Resource
from flask import request,json,jsonify
from database.database import Winers,User

class win(Resource):
    def post(self):
        data=json.loads(request.data)
        winers=Winers.query.filter_by(event_name=data['event_name']).order_by(Winers.winers).all()
        win=[]
        for x in winers:
            user=User.query.filter_by(roll=x.roll).first()
            win.append(
                {"name":f"{user.fname}"+" "+f"{user.lname}",
                 "year":user.year,
                 "stream":f"{user.stream}",
                 "roll":x.roll,
                 "position":x.winers}
            )
        return jsonify(win)
        