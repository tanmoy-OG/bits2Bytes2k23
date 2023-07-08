from app import app
from flask import json,jsonify,request
from database.database import Temp_user,db,User,Temp_otp
from sqlalchemy import or_
import random
from werkzeug.security import generate_password_hash
from authentication.send_otp import send_otp
from flask_restful import Resource
import jwt
from key.keys import otp_virify_secret_key,secret_key

class user_signup(Resource): #done 
    
    def post(self):
        data=json.loads(request.data)

        if 'roll' in data and data_validity(data,'roll'):
            role=2
        elif 'secret_key' in data and data_validity(data,'secret_key'):
                if data['secret_key']==secret_key:
                    role=0
                else:
                    return jsonify({'error':'please contact rishav ghosh for secret key'})
        else:
            return jsonify({'error':'the data is not valid !!!'})

        if 'roll' in data:
            roll=data['roll']
        else:
            roll=-0
        result=check_user(data['email'],data['mobile'],roll)
        if result:
            return jsonify({"error": "this user is already exist !!!"})


        self.temp(data,role)
        payload={"email":f"{data['email']}","signup":True}
        token=self.otp_token(payload)
        response=jsonify({'successful':'please enter the otp'})
        response.headers.set('verfication',f'{token}')
        return response

    def temp(self,data,role):
        otp=random.randint(100000,999999)
        hash_password=generate_password_hash(data['password'])

        if 'roll' in data:
            roll=data['roll']
        else:
            roll=121
        user=Temp_user.query.filter(or_(Temp_user.email==data['email'].lower(),Temp_user.mobile==data['mobile'],Temp_user.roll==roll)).all()
        for x in user:
            db.session.delete(x)
            db.session.commit()
            
        if role==0:
            user=Temp_user(fname=data['fname'].lower(),lname=data['lname'].lower(),email=data['email'].lower(),mobile=data['mobile'],password=hash_password,role_id=role,otp=otp)
        if role==2:
            user=Temp_user(fname=data['fname'].lower(),lname=data['lname'].lower(),email=data['email'].lower(),mobile=data['mobile'],roll=data['roll'],password=hash_password,role_id=role,year=data['year'],stream=data['stream'].lower(),otp=otp)

        msg=f"hello, {data['fname']} this otp {otp} is for sign up verification. Please don't share it with anyone and also don't share your password."
        send_otp('for sign_up verification',data['email'],msg)
        db.session.add(user)
        db.session.commit()

    def otp_token(self,payload):
        return jwt.encode(payload,otp_virify_secret_key,algorithm='HS256')

def check_user(email,mobile,roll):
    user=User.query.filter(or_(User.email==email,User.mobile==mobile,User.roll==roll)).all()
    temp=len(user)!=0
    return temp
    
def data_validity(data,type):
    if 'roll' == type and len(data)==8 and data['fname'] and data['lname'] and data['email'] and data['mobile'] and data['roll'] and data['password'] and data['year'] and data['stream']:
        return True
    elif 'secret_key' == type and len(data)==6 and data['fname'] and data['lname'] and data['email'] and data['mobile'] and 'roll' not in data and data['password'] and 'year' not in data and 'stream' not in data:
        return True
    else:
        return False
    
    
