status.$inject = ['$scope'];

export default function status($scope) {

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

};
