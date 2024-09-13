import {validationList, sendImageToEmail} from "./mailsender";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/email/send', validationList, sendImageToEmail);

app.listen(() => {
  console.log('Server works!!!');
})

module.exports = app;
