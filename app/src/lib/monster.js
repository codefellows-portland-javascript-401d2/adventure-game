
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

Monster.prototype.takeMeleeHit = function(dmg) {
  this.hp -= dmg * (this.weaknessMelee ? 1.3 : 1);
};

module.exports = Monster;
