const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

let apiKey = 'ba2b8c20c3ea596f3b8d2a56dca6b2c9';
let city = 'miami beach';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;




request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

