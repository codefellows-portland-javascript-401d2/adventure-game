
playerController.$inject = ['$scope'];
module.exports = function playerController(player) {
  player.health = 100;
  player.stamina = 100;
  evade = 0.75;
};