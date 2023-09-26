import stripe
from flask import Flask, jsonify, redirect, request
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
app.json.compact = False
api = Api(app)
CORS(app)

stripe.api_key = "sk_test_51NuOQmC0RAqcCFTGCFiFNGV8yDXgRQWPy5vBcxvBwxMJB373oQzH4R8qxKk9nfT61cwVwrdR7DlOglGDDrWDarb800SuOCzWCK"


@app.route("/")
def index():
    return jsonify({"message": "Hello"})


@app.route("/payment_intent/new")
def create_payment_intent():
    intent = stripe.PaymentIntent.create(amount=1099, currency="usd")
    return jsonify(client_secret=intent.client_secret)


@app.route("/payment-success", methods=["GET", "POST"])
def payment_success():
    # logic to make necessary updates in db
    return redirect("http://localhost:5173/status", code=302)
    # return jsonify({"message": "success"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5555)
