const Monster = require('../lib/monster');

status.$inject = ['$scope'];

export default function status($scope) {

  $scope.dancingBears = new Monster('Dancing Bears', 30, 15, 0.5, 'r');
  $scope.funnySnakes = new Monster('Funny Snakes', 10, 5, 0.9, 'm');

  $scope.dancingBears.currentHealth = function(newValue = $scope.dancingBears.health) {
    return (newValue * 100) / $scope.dancingBears.maxHealth;
  };

};
