
var Monster = function(name, health, damage, accuracy, weakness) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.accuracy = accuracy;
  this.weakness = weakness;
  this.maxHealth = health;
  this.currentHealth;
};

module.exports = Monster;