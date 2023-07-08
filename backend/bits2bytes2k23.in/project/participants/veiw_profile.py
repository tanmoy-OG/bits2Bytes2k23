from app import app
from flask_restful import Resource
from flask import request,jsonify
import jwt
from database.database import User
from key.keys import participants_secret_key,authorization_token_key
from authentication.token_validation import token_validation_participents

class veiw_profile(Resource): #done
    @token_validation_participents
    def post(self):
        token=request.headers.get(authorization_token_key)
        data=jwt.decode(token,participants_secret_key,algorithms=['HS256'])
        user=User.query.filter_by(email=data['email']).first()
        return jsonify({"fname":f"{user.fname}","lname":f"{user.lname}","email":f"{user.email}","mobile":user.mobile,"roll":user.roll,"year":user.year,"stream":f"{user.stream}"})
