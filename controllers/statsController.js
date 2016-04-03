var express = require('express');
var router = express.Router();
var request = require("request");
var env = require('../env');

var statsController = {};

statsController.statsSearch = function(req,res){
  console.log('stats');
  console.log(env.token);
  request({
    // url: "https://www.stattleship.com/basketball/nba/game_logs?player_id=" + req.query.q,
    url: "https://www.stattleship.com/basketball/nba/game_logs?player_id=nba-stephen-curry",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/vnd.stattleship.com; version=1",
      "Authorization": "Token token=" + env.token
    }
  }, function(err, response, body){
    // console.log(response);
    console.log(body);
    // console.log(err);
    res.json(response)
  })
  return 'hello'
}


module.exports = statsController;
