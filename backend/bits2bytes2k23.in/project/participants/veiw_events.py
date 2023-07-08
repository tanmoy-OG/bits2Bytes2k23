from app import app
from database.database import Event
from flask import jsonify
from flask_restful import Resource

class veiw_events(Resource): #done
    def post(self):
        events1=Event.query.all()
        events=[]
        for x in events1:
            events.append({
                "event_name":x.event_name,
                "event_pic":x.event_pic,
                "event_date":x.event_date,
                "about_event":x.about_event,
                "type":x.team
            })
        return jsonify(events)
   