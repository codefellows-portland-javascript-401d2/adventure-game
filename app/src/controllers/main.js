// const player = require('../lib/player');
const gameState = require('../lib/game-state');
const settings = require('../lib/settings');
const battle = require('../lib/battle');

main.inject = ['$scope'];

export default function main($scope){

  // created with the level
  $scope.mob = {
    name: 'FancySnake',
    hp: 30,
    attack: 5,
    weaknessMelee: false,
    weaknessRanged: true,
    healthFactor: 3.33
  };

  $scope.decision = null;
  // $scope.player = player;
  $scope.player = {
    name: 'Link',
    hp: 100,
    stamina: 100,
    meleeDmg: 5,
    rangedDmg: 3
  };

  $scope.levelCounter = 0; // Should be adding one to this on Next Level
  $scope.currentLevel = function(count = $scope.levelCounter) {
    if (count < gameState.levels.length) return gameState.levels[count];
    else return gameState.levels[gameState.levels.length - 1];
  };

  $scope.inCombat = true;
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
        // $scope.player.stamina -= settings.meleeCost;
        battle.attacksMelee($scope.mob, $scope.player);
        if ($scope.mob.hp < 1){
          $scope.levelCounter += 1;
        }
      }
      else {
        // Moves Left
        $scope.decision = 'You moved left';
      }
    }
    else if (button === 'B') {
      if ($scope.inCombat()) {
        $scope.decision = 'You attack with ranged weapon';
        // $scope.player.stamina -= settings.rangedCost;
        battle.attacksRanged($scope.mob, $scope.player);
        if ($scope.mob.hp < 1){
          $scope.levelCounter += 1;
        }
      }
      else {
        // Moves Up
        $scope.decision = 'You moved up';
      }
    }
    else if (button === 'C') {
      if ($scope.inCombat()) {
        $scope.decision = 'You try to evade';
        battle.evadeAttack($scope.mob, $scope.player);
        if ($scope.mob.hp < 1){
          $scope.levelCounter += 1;
        }
      }
      else {
        // Moves Down
        $scope.decision = 'You moved down';
      }
    }
    else if (button === 'D') {
      if ($scope.inCombat()) {
        $scope.decision = 'Stop hitting yourself';
        $scope.player.health -= settings.rangedDamage;
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
