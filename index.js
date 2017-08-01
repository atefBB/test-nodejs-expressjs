var http = require('http');
const express = require('express'),
      app = express();

app.get('/', function (req, res) {
    res.send('Hello for NodeJS World!');
});

app.get('/test', function(req, res) {
   res.send('Test route!');
});

app.listen(3000, function () {
    console.log('The App is listening on http://localhost:8800.');
});
