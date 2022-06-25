
from crypt import methods
from app import app
from flask import jsonify, render_template

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/predict', methods=['POST'])
def predict():
    ret = {}
    print('hello')
    return (jsonify(ret))
