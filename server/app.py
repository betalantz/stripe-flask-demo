from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
app.json.compact = False
api = Api(app)
CORS(app)


@app.route("/")
def index():
    return "Hello"


if __name__ == "__main__":
    app.run(debug=True, port=5555)
