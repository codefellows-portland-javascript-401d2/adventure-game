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
  $scope.player.melee = null;
  $scope.player.ranged = null;
  $scope.mob = new Monster('Fancy Snakes', 30, 5, 0.9, 'r');

  $scope.levelCounter = 0;
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
      $scope.inputD = 'Stapler';
    }
    else if ($scope.currentLevel().postBattle) {
      $scope.inputA = 'Go Left';
      $scope.inputB = 'Go Right';
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

  $scope.input = function(button) {  

    if ($scope.inCombat()) {

      if (button === 'A'){
        $scope.decision = 'You attack with melee weapon';
        $scope.mobaction = gameState.levels[$scope.levelCounter].ranged || 'The mob attacks you';
        battle.attacksMelee($scope.mob, $scope.player);
        battle.getsHit($scope.mob, $scope.player);

      }
      else if (button === 'B') {
        $scope.decision = 'You attack with ranged weapon';
        $scope.mobaction = gameState.levels[$scope.levelCounter].melee || 'The mob attacks you';
        battle.attacksRanged($scope.mob, $scope.player);
        battle.getsHit($scope.mob, $scope.player);

      }
      else if (button === 'C') {
        $scope.decision = battle.evadeAttack($scope.mob, $scope.player);
        $scope.mobaction = null;

      }
      else if (button === 'D') {
        $scope.decision = 'Stop hitting yourself';
        $scope.player.hp -= settings.rangedDamage;
      }

      if ($scope.player.hp < 1){
        gameOver(false);
      }
      else if ($scope.mob.hp < 1){
        $scope.levelCounter += 1;
        $scope.decision = null;
        $scope.mobaction = null;
      }

    } 
    else {
      // NOt in combat
      $scope.levelCounter += 1;

      $scope.decision = null;
      $scope.mobaction = null;


      if ($scope.currentLevel($scope.levelCounter).enemy) {
        $scope.mob = $scope.currentLevel($scope.levelCounter).enemy;
      }

      $scope.player.stamina = 100;

      if ($scope.currentLevel().weaponSelect === 2) {
        $scope.player.melee = null;
        
        if (button == 'A') {
          $scope.player.melee = 'Rubber Chicken';
        }
        else if (button == 'B') {
          $scope.player.melee = 'Wooden Spoon';
        }
        else if (button == 'C') {
          $scope.player.melee = 'Manolo Stilettos';
        }
        else if (button == 'D') {
          $scope.player.melee = 'Bowling Pin';
        }
      } 
      if ($scope.levelCounter === 3) {
        $scope.player.ranged = null;
        if (button == 'A') {
          $scope.player.ranged = 'Squirt Gun';
        }
        else if (button == 'B') {
          $scope.player.ranged = 'Hard Cookies';
        }
        else if (button == 'C') {
          $scope.player.ranged = 'Compact Discs';
        }
        else if (button == 'D') {
          $scope.player.ranged = 'Stapler';
        }
      }
    }
  };

  function gameOver(byBlanon){
    $scope.player.hp = 0;
    $scope.decision = null;
    if (byBlanon){
      $scope.mobaction = 'Game over! Well, Blanon sure kicked your butt. The princess/prince never gets rescued and ends up married to Blanon. The whole world goes to hell in a handbasket and it\'s all your fault. Also, you\'re dead.';
    }else{
      $scope.mobaction = 'Game over! You have been defeated by the mob. You\'re dead. It\'s over. The bad guys won. Your parents are super disappointed and nobody shows up for your funeral. You should be ashamed. But you\'re dead. ';
    }
  }

  $scope.result = function() {
    return $scope.decision;
  };


}
