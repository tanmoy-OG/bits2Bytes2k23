from app import app
from flask import request,jsonify,make_response
from flask_restful import Resource
from participants.login import User_login
import jwt
from key.keys import otp_virify_secret_key
from database.database import Temp_otp,Temp_user,db
import random
from authentication.send_otp import send_otp
from key.keys import otp_virify_secret_key

class resend_otp(Resource): #done
    def post(self):
        type=request.headers.get('verification')
        head=jwt.decode(type,otp_virify_secret_key,algorithms=['HS256'])
        otp=random.randint(100000,999999)
        if 'login' in type:
            header=request.headers.get('login')
            data=jwt.decode(header,otp_virify_secret_key,algorithms=['HS256'])
            user=Temp_otp.query.filter_by(login_email=data['email']).first()
            user.otp=otp
            db.session.commit()
            msg="this {otp} is for login veification. please don't share with any one"
            send_otp('login verification',data['email'],msg)
            response=make_response(jsonify({"successful":"otp has been resend"}))
            response.headers.set('login',header)
            return response
        elif 'signup' in type:
            header=request.headers.get('signup')
            data=jwt.decode(header,otp_virify_secret_key,algorithms=['HS256'])
            user=Temp_user.query.filter_by(email=data['email']).first()
            user.otp=otp
            db.session.commit()
            msg="this {otp} is for sign up veification. please don't share with any one"
            send_otp('sign up verification',data['email'],msg)
            response=make_response(jsonify({"successful":"otp has been resend"}))
            response.headers.set('signup',header)
            return response
        elif 'forget' in type:
            header=request.headers.get('forget')
            data=jwt.decode(header,otp_virify_secret_key,algorithms=['HS256'])
            user=Temp_otp.query.filter_by(login_email=data['email']).first()
            user.otp=otp
            db.session.commit()
            msg="this {otp} is for forget password. please don't share with any one"
            send_otp('forget password verification',data['email'],msg)
            response=make_response(jsonify({"successful":"otp has been resend"}))
            response.headers.set('login',header)
            return response
        else:
            return jsonify({"error":"invalid request !!!"})