var express = require('express');
var app = express();

app.use('/', express.static('./public'));

app.get('/api/points', function(req, res) {
  var mapObj = [];
  for(var i=0; i<10000; i++){
    mapObj.push([getRandomInt(-180, 180), getRandomInt(-90, 90), getRandomInt(0, 9)]);
  }
  res.json(mapObj);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
