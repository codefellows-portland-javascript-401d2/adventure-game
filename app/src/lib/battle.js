var battle = {};

/***************************************************/
/*           EXAMPLE PLAYER AND MOB               */
/*************************************************/

var player = {
  name: 'Link',
  hp: 100,
  stamina: 100
};

var mob = {
  name: 'FancySnake',
  hp: 30,
  attack: 5
};


/***************************************************/
/*               PLAYER GETS HIT                  */
/*************************************************/


battle.getsHit = function(){

  player.hp -= mob.attack;  //player takes normal damage

  if (player.hp <= 0) {
    console.log('Game Over'); // TODO: have to do something to stop game here
  }
};


/***************************************************/
/*              PLAYER MELEE ATTACK               */
/*************************************************/


battle.attacksMelee = function(){

  if(player.stamina < 5) { //attacks need stamina to work

    console.log('You are out of stamina'); //Nothing happens

  } else {

    mob.hp -= 5; // mob gets hit for normal damage
    player.stamina -= 5; // player uses up stamina in attack

    if(mob.hp <= 0) {
      console.log('You win, moving on!'); // TODO: do something to shift to next room
    }
  }
};


/***************************************************/
/*              PLAYER RANGE ATTACK               */
/*************************************************/


battle.attacksRange = function(){

  if(player.stamina < 3) { //attacks need stamina to work

    console.log('You are out of stamina'); //Nothing happens

  } else {

    mob.hp -= 3; // mob gets hit for normal damage

    player.stamina -= 3; // player uses up stamina in attack

    if(mob.hp <= 0) {
      console.log('You win, moving on!'); // TODO: do something to shift to next room
    }
  }
};

/***************************************************/
/*                PLAYER EVADE                    */
/*************************************************/


function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min); // generating random number
}

battle.evadeAttack = function(){

  var random = randomNumber(1,6);

  if (random < 3) {

    //Player Evade was successfull
    player.stamina += 3;  //Player gains stamina and does not get hit

  } else if (random < 5) {

    //Player Evade failed
    player.hp -= mob.attack;  //Player takes normal amount of damage and gains no stamina

  } else {

    //Player Evade is kinda successfull
    player.hp -= mob.attack * 0.5; //Player takes 50% of the damage
    player.stamina += 1; //Player gains a small amount of stamina
  }
};

module.exports = battle;
