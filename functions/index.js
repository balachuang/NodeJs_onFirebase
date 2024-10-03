const functions = require('firebase-functions');
const express = require('express');
//const logger = functions.logger;

const app = express();
app.get('/timestamp', (request, response) => {
    let dateStr = (new Date(Date.now())).toUTCString();
    response.send(dateStr);
});

exports.app = functions.https.onRequest(app);
