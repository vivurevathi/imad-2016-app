var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/vivu.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vivu.jpg'));
});

app.get('/ui/abc.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'abc.jpg'));
});

app.get('/ui/cd.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cd.jpg'));
});

app.get('/ui/cv.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cv.JPG'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
