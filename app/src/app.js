const angular = require('angular');
const material = require('angular-material');
const player = require('./lib/player');
const Monster = require('./lib/monster');
const gameState = require('./lib/game-state');
const settings = require('./lib/settings');

require('./css/main.css');

const app = angular.module('app', [material]);

// Configure Colors and Theme
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('statusBars')
    .primaryPalette('red')
    .accentPalette('green')
    .warnPalette('blue')
    .backgroundPalette('grey');
});

// Main Controller for Managing Game States and Globals
app.controller('main-Ctrl', function($scope) {

  $scope.levelCounter = 0; // Should be adding one to this on Next Level
  $scope.currentLevel = function(count = $scope.levelCounter) {
    if (count < gameState.levels.length) return gameState.levels[count];
    else return gameState.levels[gameState.levels.length - 1];
  };

  $scope.player = player;

  $scope.inputA = 'Melee';
  $scope.inputB = 'Ranged';
  $scope.inputC = 'Evade';
  $scope.inputD = 'Punch Self';

  $scope.input = function(button) {  // Needs to be dynamic according to State
    if (button === 'A') {
      $scope.decision = 'You attack with melee weapon';
      player.stamina -= settings.meleeCost;
    }
    else if (button === 'B') {
      $scope.decision = 'You attack with ranged weapon';
      player.stamina -= settings.rangedCost;
    }
    else if (button === 'C') {
      $scope.decision = 'You try to evade';

    }
    else if (button === 'D') {
      $scope.decision = 'Stop hitting yourself';
      player.health -= settings.rangedDamage;
    }
  };

  $scope.decision = null;
  $scope.action = function(text = $scope.decision){
    if (text){
      if (text === 'You try to evade'){
        return text + '.  The monster attacks and misses!';
      }else if (text === 'Stop hitting yourself'){
        return text + '. The monster giggles.';
      }else{
        return text + '.  The monster howls in pain';
      } 
    }else{
      return 'Make a move';
    }
  };
});

// Output Controller for Text Line Output
app.controller('output-Ctrl', function($scope) {

});

// Action Controller 
app.controller('action-Ctrl', function($scope) {

  $scope.dancingBears = new Monster('Dancing Bears', 30, 15, 0.5, 'r');
  $scope.funnySnakes = new Monster('Funny Snakes', 10, 5, 0.9, 'm');

  $scope.dancingBears.currentHealth = function(newValue = $scope.dancingBears.health) {
    return (newValue * 100) / $scope.dancingBears.maxHealth;
  };

});

module.exports = app.name;