const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/testget', function(req, res) {
  res.json({ "content": "I am a response from testget!" });
});

app.post('/testpost', function(req, res) {
  res.json({ "content": "I am a response from testpost!" });
});

app.post('/respond', function(req, res) {
  res.json({ "content": "I am a response from the respond post method! I received: " + JSON.stringify(req.body) });
});

const port = 3003;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
});