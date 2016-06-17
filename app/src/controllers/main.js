const player = require('../lib/player');
const gameState = require('../lib/game-state');
const settings = require('../lib/settings');
const battle = require('../lib/battle');
const Monster = require('../lib/monster');

main.inject = ['$scope'];

export default function main($scope){

  $scope.decision = null;
  $scope.mobaction = null;
  $scope.player = player;
  $scope.mob = new Monster('Fancy Snakes', 30, 5, 0.9, 'r');

  $scope.levelCounter = 0; // Should be adding one to this on Next Level
  $scope.currentLevel = function(count = $scope.levelCounter) {
    if (count < gameState.levels.length) return gameState.levels[count];
    else return gameState.levels[gameState.levels.length - 1];
  };

  $scope.inCombat = false;
  $scope.inCombat = function() {
    if ($scope.currentLevel().enemy) return true;
    else return false;
  };

  $scope.switchInputs = function() {
    if ($scope.inCombat()) {
      $scope.inputA = 'Melee';
      $scope.inputB = 'Ranged';
      $scope.inputC = 'Evade';
      $scope.inputD = 'Punch Self';
    }
    else if ($scope.levelCounter === 1) {
      $scope.inputA = 'Rubber Chicken';
      $scope.inputB = 'Wooden Spoon';
      $scope.inputC = 'Manolo Stilettos';
      $scope.inputD = 'Bowling Pin';
    }
    else if ($scope.levelCounter === 2) {
      $scope.inputA = 'Squirt Gun';
      $scope.inputB = 'Hard Cookies';
      $scope.inputC = 'Compact Discs';
      $scope.inputD = 'Flip Phones';
    }
    else if (!$scope.currentLevel().intro && !$scope.currentLevel().postBattle) {
      $scope.inputA = 'To Battle!';
    }
    else {
      $scope.inputA = 'Let\'s Go!';
    }
  };

  // listens for change to switch inputs
  $scope.$watch('switchInputs()', function() {});

  $scope.input = function(button) {  // Needs to be dynamic according to State

    if ($scope.inCombat()){

      if (button === 'A'){
        $scope.decision = 'You attack with melee weapon';
        $scope.mobaction = gameState.levels[$scope.levelCounter].ranged || 'The mob attacks you';
        // $scope.player.stamina -= settings.meleeCost;
        battle.attacksMelee($scope.mob, $scope.player);
        battle.getsHit($scope.mob, $scope.player);
        if ($scope.mob.hp < 1){
          $scope.levelCounter += 1;
          $scope.mob = $scope.currentLevel();
          $scope.decision = null;
          $scope.mobaction = null;
        }
      }
      else if (button === 'B') {
        $scope.decision = 'You attack with ranged weapon';
        $scope.mobaction = gameState.levels[$scope.levelCounter].melee || 'The mob attacks you';
        // $scope.player.stamina -= settings.rangedCost;
        battle.attacksRanged($scope.mob, $scope.player);
        battle.getsHit($scope.mob, $scope.player);
        if ($scope.mob.hp < 1){
          $scope.levelCounter += 1;
          $scope.mob = $scope.currentLevel();
          $scope.decision = null;
          $scope.mobaction = null;
        }
      }else if (button === 'C') {
        $scope.decision = 'You try to evade';
        battle.evadeAttack($scope.mob, $scope.player);
        if ($scope.mob.hp < 1){
          $scope.levelCounter += 1;
          $scope.decision = null;
          $scope.mobaction = null;
        }
      }else if (button === 'D') {
        $scope.decision = 'Stop hitting yourself';
        $scope.player.health -= settings.rangedDamage;
      }
    }else{
      // NOt in combat
      $scope.levelCounter += 1;

      $scope.decision = null;
      $scope.mobaction = null;


      if ($scope.currentLevel($scope.levelCounter).enemy) {
        $scope.mob = $scope.currentLevel($scope.levelCounter).enemy;
      }

      $scope.player.stamina = 100;
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
