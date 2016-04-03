var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname+ '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
  console.log('what up?');
})

var routes = require('./config/routes');
app.use(routes)

app.listen(3000);
