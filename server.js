var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});

app.get('/ui/preset1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'preset1.css'));
});

app.get('/ui/preset2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'preset2.css'));
});

app.get('/ui/preset3.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'preset3.css'));
});

app.get('/ui/preset4.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'preset4.css'));
});

app.get('/ui/preset5.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'preset5.css'));
});

app.get('/ui/preset6.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'preset6.css'));
});

app.get('/ui/lightbox.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'lightbox.css'));
});
app.get('/ui/animate.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.min.css'));
});
app.get('/ui/responsive.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'responsive.css'));
});

app.get('/ui/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});

app.get('/ui/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.min.css'));
});

app.get('/ui/lightbox.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'lightbox.css'));
});

app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});

app.get('/ui/2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.jpg'));
});

app.get('/ui/3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.jpg'));
});

app.get('/ui/4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '4.jpg'));
});

app.get('/ui/5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '5.jpg'));
});

app.get('/ui/6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '6.jpg'));
});

app.get('/ui/7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '7.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
