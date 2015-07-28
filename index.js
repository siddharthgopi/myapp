var express = require('express');
var app = express();
app.use(express.cookieParser());
app.get('/sad', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  res.cookie('cookieName','asdasdasd', { maxAge: 900000, httpOnly: true });
  console.log('Example app listening at http://%s:%s', host, port);
});
