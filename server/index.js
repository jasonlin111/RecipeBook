const express = require("express")
const cors = require("cors")
require("dotenv").config()

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require("twilio")(accountSid, authToken)

// create express app
const app = express()

// middleware
app.use(cors())

app.get("/", (req, res) => {
   res.send("You're connected to the Express Server")
})

// Twilio
app.get("/send-text", (req, res) => {
   res.send("You're connected to the Twilio Server")
   const { recipient, textmessage } = req.query
   client.messages
     .create({
        body: textmessage,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "+1" + recipient
      })
     .then(message => console.log(message.body))
})

// listening for requests
app.listen(4000, () =>
   console.log("Running on Port 4000")
)
