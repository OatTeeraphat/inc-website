// Static Server Serve Static HTML File
var express = require('express');
var history = require('connect-history-api-fallback')

var app = express();
var staticFileMiddleware = express.static(__dirname + '/src')
var port = process.env.PORT || 3000;


app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/src/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  console.log(`Yummy 👻 👻`);
});