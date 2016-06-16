const player = require('../lib/player');
const gameState = require('../lib/game-state');
const settings = require('../lib/settings');

main.inject = ['$scope'];

export default function main($scope){

  $scope.decision = null;
  $scope.player = player;

  $scope.levelCounter = 0; // Should be adding one to this on Next Level
  $scope.currentLevel = function(count = $scope.levelCounter) {
    if (count < gameState.levels.length) return gameState.levels[count];
    else return gameState.levels[gameState.levels.length - 1];
  };

  $scope.inCombat = false;
  $scope.inCombat = function(lvl = $scope.levelCounter) {
    if (lvl !== 0 && lvl % 2 === 0) return true;
    else return false;
  };

  $scope.switchInputs = function() {
    if ($scope.inCombat()) {
      $scope.inputA = 'Melee';
      $scope.inputB = 'Ranged';
      $scope.inputC = 'Evade';
      $scope.inputD = 'Punch Self';
    } 
    else {
      $scope.inputA = 'Go Left';
      $scope.inputB = 'Go Up';
      $scope.inputC = 'Go Down';
      $scope.inputD = 'Go Right';
    }
  };

// listens for change to switch inputs
  $scope.$watch('switchInputs()', function() {}); 

  $scope.input = function(button) {  // Needs to be dynamic according to State
    if (button === 'A') {
      if ($scope.inCombat()) {
        $scope.decision = 'You attack with melee weapon';
        player.stamina -= settings.meleeCost;
      } 
      else {
        // Moves Left
        $scope.decision = 'You moved left';
      }
    }
    else if (button === 'B') {
      if ($scope.inCombat()) {
        $scope.decision = 'You attack with ranged weapon';
        player.stamina -= settings.rangedCost;
      }
      else {
        // Moves Up
        $scope.decision = 'You moved up';
      }
    }
    else if (button === 'C') {
      if ($scope.inCombat()) {
        $scope.decision = 'You try to evade';
      }
      else {
        // Moves Down
        $scope.decision = 'You moved down';
      }
    }
    else if (button === 'D') {
      if ($scope.inCombat()) {
        $scope.decision = 'Stop hitting yourself';
        player.health -= settings.rangedDamage;
      }
      else {
        // Moves Right
        $scope.decision = 'You moved right';
      }
    }
  };

  $scope.result = function() {
    return $scope.decision;
  };

  // $scope.decideResult = function(){
  //
  //   $scope.result = 'yup un huh';
  // };



}
