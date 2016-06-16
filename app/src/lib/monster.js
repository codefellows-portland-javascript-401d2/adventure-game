
var Monster = function(name, health, damage, accuracy, weakness) {
  this.name = name;
  this.hp = health;
  this.damage = damage;
  this.accuracy = accuracy;
  this.weakness = weakness;
  this.maxHealth = health;
};

module.exports = Monster;