from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app import app

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///bit.db'
db=SQLAlchemy(app)
migrate=Migrate(app,db)

class Event(db.Model):
    event_name=db.Column(db.String(50), primary_key=True)
    event_pic=db.Column(db.String(100), unique=True, nullable=False)
    event_date=db.Column(db.String(50), nullable=False)
    about_event=db.Column(db.String(500), nullable=False)
    team=db.Column(db.Integer, nullable=False)

class User(db.Model):
    fname=db.Column(db.String(50), nullable=False)
    lname=db.Column(db.String(50), nullable=False)
    email=db.Column(db.String(100), primary_key=True)
    mobile=db.Column(db.Integer, primary_key=True)
    roll=db.Column(db.Integer, unique=True, nullable=True)
    password=db.Column(db.String(500), nullable=False)
    role_id=db.Column(db.Integer, nullable=False)
    year=db.Column(db.Integer, nullable=True)
    stream=db.Column(db.String(10), nullable=True)

    participants=db.relationship('Participants',backref='parti',uselist=False,cascade='all,delete')
    participants=db.relationship('Team_participate',backref='teamparti',uselist=False,cascade='all,delete')
    participants=db.relationship('Winers',backref='win',uselist=False,cascade='all,delete')

class Participants(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    roll=db.Column(db.Integer, db.ForeignKey('user.roll'), nullable=False,unique=False) 
    event_name=db.Column(db.String(50), db.ForeignKey('event.event_name'), nullable=False)
 

class Team_participate(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    roll=db.Column(db.Integer, db.ForeignKey('user.roll'), nullable=False) 
    event_name=db.Column(db.String(50), db.ForeignKey('event.event_name'), nullable=False)
    team_name=db.Column(db.String(100), nullable=False)

class Temp_user(db.Model):
    fname=db.Column(db.String(50), nullable=False)
    lname=db.Column(db.String(50), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    mobile=db.Column(db.Integer, primary_key=True, nullable=False)
    roll=db.Column(db.Integer, unique=True, nullable=True)
    password=db.Column(db.String(500), nullable=False)
    role_id=db.Column(db.Integer, nullable=False)
    year=db.Column(db.Integer, nullable=True)
    stream=db.Column(db.String(10), nullable=True)
    exp=db.Column(db.Integer, nullable=True)
    otp=db.Column(db.Integer, nullable=False)
    
class Deleted_users(db.Model):
    fname=db.Column(db.String(50), nullable=False)
    lname=db.Column(db.String(50), nullable=False)
    email=db.Column(db.String(100), primary_key=True, nullable=False)
    mobile=db.Column(db.Integer, primary_key=True, nullable=False)
    roll=db.Column(db.Integer, unique=True, nullable=True)
    year=db.Column(db.Integer, nullable=True)
    stream=db.Column(db.String(10), nullable=True)
    deleted_by=db.Column(db.String(100), db.ForeignKey('user.email'))

class Winers(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    roll=db.Column(db.Integer, db.ForeignKey('user.roll'), nullable=True)
    team=db.Column(db.String(100), db.ForeignKey('team_participate.team_name'), nullable=True)
    event_name=db.Column(db.String(100), db.ForeignKey('event.event_name'), nullable=False)
    winers=db.Column(db.Integer, nullable=True)

class Temp_otp(db.Model):
    login_email=db.Column(db.String(100), db.ForeignKey('user.email'), primary_key=True, nullable=True)
    otp=db.Column(db.Integer, nullable=False)
    exp_time=db.Column(db.Integer, nullable=True)
    password=db.Column(db.String(500), nullable=True)
