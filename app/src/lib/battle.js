var battle = {};

var player = {
  name: 'Link',
  hp: 20,
  stamina: 20
};

var mob = {
  name: 'FancySnake',
  hp: 50,
  attack: 5
};

battle.getsHit = function(){
  var newHp = player.hp - mob.attack;
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

function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

battle.evadeAttack = function(){

  var random = randomNumber(1,6);

  if (random < 3) {

    console.log('Your evade was successfull!');
    var newStamina = player.stamina + 3;
    console.log('You have gained ' + newStamina + ' Stamina!');
    player.stamina = newStamina;

  } else if (random < 5) {

    console.log('Your evade failed!');
    var newHp = player.hp - mob.attack;
    console.log('HP: ' + newHp);
    player.hp = newHp;

  } else {

    console.log('Your evade did not quite work out. You still got hit!');

    var newHp = player.hp - (mob.attack * 0.5);
    console.log('HP: ' + newHp);
    player.hp = newHp;


    console.log('You have gained ' + newStamina + ' Stamina!');
    player.stamina += 1;
  }
};



module.exports = battle;
