var express = require('express');
var metadata = require('node-ec2-metadata');
var app = express();

var instanceId = metadata.getMetadataForInstance('instance-id');

app.get('/', function (req, res) {
  res.send('Hello World!' + '\nfrom ' + instanceId);
});

app.listen(80, function () {
  // console.log('Example app listening on port 3000!');
});

