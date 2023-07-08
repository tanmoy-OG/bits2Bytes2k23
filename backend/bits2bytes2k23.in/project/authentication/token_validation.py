from app import app
from functools import wraps
from flask import request, jsonify
import jwt
from datetime import datetime
from key.keys import admin_secret_key,participants_secret_key,authorization_token_key

def token_validation_participents(f):
    @wraps(f)
    def validation(*args,**kwargs):
        check=aurtharization(participants_secret_key)
        if check:
            return check
        return f(*args,**kwargs)
    return validation

def token_validation_admin(f):
    @wraps(f)
    def validation(*args,**kwargs):
        check=aurtharization(admin_secret_key)
        if check:
            return check
        return f(*args,**kwargs)
    return validation

def expire():
    time=datetime.now()
    return int(time.timestamp())

def aurtharization(secret_key):
    token=request.headers.get(authorization_token_key)
    if not token:
        return jsonify({'error':'the token is missing !!!'})
    try:
        data=jwt.decode(token,secret_key,algorithms=['HS256'])
        if data['expire']< expire():
            return jsonify({"error":"login expire !!!"})
    except:
        return jsonify({"error":"the token is not valid !!!"})