const player = require('../lib/player');
const gameState = require('../lib/game-state');
const settings = require('../lib/settings');

main.inject = ['$scope'];

export default function main($scope){

  $scope.decision = null;
  $scope.result = null;

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

  // $scope.decideResult = function(){
  //
  //   $scope.result = 'yup un huh';
  // };



}
