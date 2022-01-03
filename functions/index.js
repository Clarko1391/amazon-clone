const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
    functions.config().stripe.key
);


const app = express();
app.use(cors({
    // Note that this defeats the purpose of cors entirely
    origin: true, 
}));
app.use(express.json());


app.get("/", (request, response) => {
  response.status(200).send("Hello from cloud");
});


// Uses Stripe API to create a new payment through Stripe
// Note that the Stripe API is initialized with an API key stored in
// a firebase runtime env configuration for safety
// The api key is already added to the deployment environment as well
app.post("/payments/create", async (request, response) => {
        const total = request.query.total;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'cad',
        });
        // console.log(paymentIntent.client_secret);
        response.status(201).send({
            clientSecret: paymentIntent.client_secret
        });
    // });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.api = functions.https.onRequest(app);
