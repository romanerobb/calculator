//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.post('/', (req, res) => {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  
    res.send("Here is the result of your calculation " + result);
  });

  app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
  });

app.post('/bmicalculator', (req, res) => {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);
  
    res.send("Here is the result of your BMI calculation " + bmi);
  });

  app.get('/about', (req, res) => {
    res.send('<h1>This is a simple calculator created by Romane Orlando Robb.</h1>');
  });

  app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000');
  });