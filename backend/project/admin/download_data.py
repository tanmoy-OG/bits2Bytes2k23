from app import app
from flask_restful import Resource
from flask import json,request,jsonify,send_file
from authentication.token_validation import token_validation_admin
from database.database import Event,Team_participate,Participants,User
import pandas as pd

class Download_by_admin(Resource):
    @token_validation_admin
    def post(self):
       return download()
    
def download():
    data=json.loads(request.data)
    event=Event.query.filter_by(event_name=data['event_name']).first()
    if event.team ==1:
        event_data=Team_participate.query.filter_by(**{data['event_name']:1}).order_by(Team_participate.team_name).all()
        xl=[]
        for x in event_data:
            user=User.query.filter_by(roll=x.roll).first()
            xl.append(
                {"name":f"{user.fname}+' '+{user.lname}",
                    "email":f"{user.email}",
                    "mobile":f"{user.mobile}",
                    "roll":f"{user.roll}",
                    "year":f"{user.year}",
                    "stream":f"{user.stream}",
                    "group":f"{x.team_name}"})
    else:
        event_data=Participants.query.filter_by(**{data['event_name']:1}).all()
        xl=[]
        for x in event_data:
            user=User.query.filter_by(roll=x.roll).first()
            xl.append(
                {"name":f"{user.fname}+' '+{user.lname}",
                    "email":f"{user.email}",
                    "mobile":f"{user.mobile}",
                    "roll":f"{user.roll}",
                    "year":f"{user.year}",
                    "stream":f"{user.stream}"})
            
    filename='event_details/'+data['event_name']+'.xlsx'
    df=pd.DataFrame(xl)
    df.to_excel(filename,index=False)
    return send_file(filename,as_attachment=True)