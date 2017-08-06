const express = require('express'),
      app = express();

app.get('/', function (req, res) {
    res.send('Hello for NodeJS World!');
});

app.get('/test', function(req, res) {
   res.send('Test route!');
});

app.post('/api', function(req, res) {
   res.send('API');
});

app.listen(3300, function () {
    console.log('The App is listening on http://localhost:3300.');
});
