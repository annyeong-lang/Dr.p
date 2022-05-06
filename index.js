'use strict';

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);
app.get('*', (req, res) => {
    res.send(`Hello, world`);
});

exports.hello = functions.https.onRequest(app);