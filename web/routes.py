
from crypt import methods
from urllib import response

from sqlalchemy import JSON
from app import app
from flask import jsonify, render_template, request
import json

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/stats')
def stats():
    return render_template("stats.html")

@app.route('/predict', methods=['POST'])
def predict():
    ret = {}
    if json.loads(request.data.decode())["id"] == 1:
        ret["img"] = open("./static/maps/maCarte1.html", "r").read()
    if json.loads(request.data.decode())["id"] == 2:
        ret["img"] = "https://pbs.twimg.com/media/Eiit6JRWAAIsbeB?format=jpg&name=large"
    if json.loads(request.data.decode())["id"] == 3:
        ret["img"] = "https://c0.lestechnophiles.com/www.madmoizelle.com/wp-content/uploads/2012/01/trollface.jpg"
    return (jsonify(ret))
