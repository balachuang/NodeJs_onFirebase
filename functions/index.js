const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/time', (request, response) => {
    let dateStr = (new Date(Date.now())).toUTCString();
    response.send("Current time: " + dateStr);
});

exports.app = functions.https.onRequest(app);
