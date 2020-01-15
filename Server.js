/*
var http = require("http");
var path = require("path");
var ServerIP = '127.0.0.1',
    port = '8080';
*/


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ad6455037@gmail.com',
        pass: '123456Pochta'
    }
});





var express = require('express');
var cors = require('cors')
var bodyParser     =        require("body-parser");
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log('123');
  console.log(req.body.name);

transporter.sendMail({
    from: 'ad6455037@gmail.com',
    to: 'swapep@mail.ru',
    subject: 'hello world!',
    text: req.body.name + '\n' + req.body.email  + '\n' + req.body.message 
});


});

app.listen(3000);