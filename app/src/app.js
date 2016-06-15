const angular = require('angular');
const material = require('angular-material');

require('./css/main.css');

const app = angular.module('app', [material]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('statusBars')
    .primaryPalette('red')
    .accentPalette('green')
    .warnPalette('blue')
    .backgroundPalette('grey');
});

app.controller('main-Ctrl', function($scope) {
  $scope.action = 'Make a Move!';
});

app.controller('action-Ctrl', function($scope) {
  
  var Monster = function(name, health, damage, accuracy, weakness) {
    this.name = name;
    this.maxHealth = health;
    this.damage = damage;
    this.accuracy = accuracy;
    this.weakness = weakness;
    this.health = this.maxHealth;
    // this.currentHealth = (this.health * 100) / this.maxHealth; 
  };

  var player = {
    health: 100,
    stamina: 100,
    evade: 0.75
  };

  $scope.player = player;
  $scope.dancingBears = new Monster('Dancing Bears', 30, 15, 0.5, 'r');
  $scope.funnySnakes = new Monster('Funny Snakes', 10, 5, 0.9, 'm');

  $scope.$watch('dancingBears.health', function(newValue) {
    $scope.dancingBears.currentHealth = (newValue * 100) / $scope.dancingBears.maxHealth;
  });

});

// app.controller('player-Ctrl', playerCtrl);
// app.controller('monster-Ctrl', monsterCtrl);
