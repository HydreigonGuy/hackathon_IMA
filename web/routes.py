
from crypt import methods
from urllib import response
from app import app
from flask import jsonify, render_template, request

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/predict', methods=['POST'])
def predict():
    ret = {}
    if request.data == b'1':
        ret["img"] = "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta27d0cb379d1daf0/60ee1269f7e95137f9d04923/soraka-splash.jpg"
    if request.data == b'2':
        ret["img"] = "https://pbs.twimg.com/media/Eiit6JRWAAIsbeB?format=jpg&name=large"
    if request.data == b'3':
        ret["img"] = "https://c0.lestechnophiles.com/www.madmoizelle.com/wp-content/uploads/2012/01/trollface.jpg"
    return (jsonify(ret))
