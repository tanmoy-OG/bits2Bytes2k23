from app import app
from flask import json,request,jsonify
from database.database import User,db,Deleted_users
from authentication.token_validation import token_validation_admin
from flask_restful import Resource
import jwt
from key.keys import admin_secret_key,authorization_token_key

class delete_user(Resource): #done
    @token_validation_admin
    def post(self):
        data=json.loads(request.data)
        user=User.query.filter_by(roll=data['roll']).first()
        if user:
            token=request.headers.get(authorization_token_key)
            email=jwt.decode(token,admin_secret_key,algorithms=['HS256'])
            temp_user=Deleted_users(fname=user.fname,lname=user.lname,email=user.email,mobile=user.mobile,roll=user.roll,year=user.year,stream=user.stream,deleted_by=email['email'])
            db.session.add(temp_user)
            db.session.delete(user)
            db.session.commit()
            return jsonify({'message':'user deleted successfully'})
        else:
            return jsonify({'error':'user does not exist'})