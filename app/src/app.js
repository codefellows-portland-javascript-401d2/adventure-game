const angular = require('angular');
const playerCtrl = require('./controllers/player');
const monsterCtrl = require('./controllers/monster');
require('./css/main.css');

const app = angular.module('app', []);

app.controller('main-Ctrl', function($scope) {
  $scope.action = 'Make a Move!';
});

app.controller('action-Ctrl', function($scope) {
  
  var Monster = function(name, health, damage, accuracy, weakness) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.accuracy = accuracy;
    this.weakness = weakness;
  };

  var player = {
    health: 100,
    stamina: 100,
    evade: 0.75
  };

  $scope.player = player;
  $scope.dancingBears = new Monster('Dancing Bears', 30, 15, 0.5, 'r');
  $scope.funnySnakes = new Monster('Funny Snakes', 10, 5, 0.9, 'm');
});

// app.controller('player-Ctrl', playerCtrl);
// app.controller('monster-Ctrl', monsterCtrl);
