from app import app
from flask_restful import Resource
from flask import json,request,jsonify
from key.keys import authorization_token_key,participants_secret_key
import jwt
from database.database import db,User
from authentication.token_validation import token_validation_participents

class update_profile(Resource): #done
    @token_validation_participents
    def post(self):
        data=json.loads(request.data)
        if len(data)==5 and data['fname'] and data['lname'] and data['mobile'] and data['stream'] and data['year']:
            header=request.headers.get(authorization_token_key)
            token=jwt.decode(header,participants_secret_key,algorithms=['HS256'])
            user=User.query.filter_by(email=token['email']).first()
            user.fname=data['fname']
            user.lname=data['lname']
            user.mobile=data['mobile']
            user.stream=data['stream']
            user.year=data['year']
            db.session.commit()
            return jsonify({"successful":"profile updated successfully"})
        else:
            return jsonify({"error":"the data is not valid"})
