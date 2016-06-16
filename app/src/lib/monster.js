
var Monster = function(name, health, damage, accuracy, weakness) {
  this.name = name;
  this.hp = health;
  this.attack = damage;
  this.accuracy = accuracy;
  this.weakness = weakness;
  this.maxHealth = health;
  this.weaknessMelee = false;
  this.weaknessRanged = true;
};

module.exports = Monster;
