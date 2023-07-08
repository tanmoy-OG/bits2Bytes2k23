from app import app
from flask import send_file,request,json,send_from_directory
from flask_restful import Resource

class send_image(Resource): #done
    def post(self):
        image=json.loads(request.data)
        return send_from_directory('images',image['event_pic'], as_attachment=True)
