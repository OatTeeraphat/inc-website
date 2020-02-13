// Static Server Serve Static HTML File

var express = require('express'); 
var app = express();

app.use(express.static(__dirname + '/src'));
console.log("gogo")

app.listen(process.env.PORT || 3000);