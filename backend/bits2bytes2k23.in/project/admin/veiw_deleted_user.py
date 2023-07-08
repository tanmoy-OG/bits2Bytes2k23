from app import app
from database.database import Deleted_users,db
from flask_restful import Resource
from flask import jsonify
from authentication.token_validation import token_validation_admin

class veiw_deleted_user(Resource): #done
    @token_validation_admin
    def post(self):
        data=Deleted_users.query.all()
        users=[]
        for x in data:
            users.append({
                "fname":x.fname,
                "lname":x.lname,
                "email":x.email,
                "mobile":x.mobile,
                "roll":x.roll,
                "year":x.year,
                "stream":x.stream,
                "deleted_by":x.deleted_by
                })
        return jsonify(users)