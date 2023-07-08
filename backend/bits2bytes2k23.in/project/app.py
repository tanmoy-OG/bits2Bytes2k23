from flask import Flask,render_template
from flask_cors import CORS

app=Flask(__name__)
CORS(app)


from api import api