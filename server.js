var express = require("express");
var app = express();

app.get("/player", function(req, res) {
  var level;
  if (req.query.player === 'Weah') {
  	level = 'high';
  } else {
  	level = 'low';
  }

  res.send(level);
});

app.listen(3000);