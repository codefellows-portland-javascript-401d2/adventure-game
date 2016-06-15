var battle = {};

var player = {
  name: 'Link',
  hp: 20,
  stamina: 20
};

var mob = {
  name: 'FancySnake',
  hp: 50
};

battle.getsHit = function(){
  var newHp = player.hp - 5;
  console.log('HP: ' + newHp);
  player.hp = newHp;

  if (player.hp <= 0) {
    console.log('Game Over');
  }
};

getsHit();
getsHit();
getsHit();
getsHit();

battle.attacksMelee = function(){

  if(player.stamina < 5) {

    console.log('You are out of stamina');
    //Nothing happens

  } else {

    var newMobHp = mob.hp - 5;
    console.log('Mob HP: ' + newMobHp);
    mob.hp = newMobHp;
    var newStamina = player.stamina -5;
    console.log('Stamina: ' + newStamina);
    player.stamina = newStamina;

    if(mob.hp <= 0) {
      console.log('You win, moving on!');
    }
  }
};

battle.attackAndStaminaRegen = function(){

  attacksMelee();
  var newStamina = player.stamina + 3;
  player.stamina = newStamina;
};

attackAndStaminaRegen();
attackAndStaminaRegen();
attackAndStaminaRegen();
attackAndStaminaRegen();
attackAndStaminaRegen();
attackAndStaminaRegen();
attackAndStaminaRegen();
attackAndStaminaRegen();


module.exports = battle;
