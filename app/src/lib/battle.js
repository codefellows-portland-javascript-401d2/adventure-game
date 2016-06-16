var battle = {};

/***************************************************/
/*           EXAMPLE PLAYER AND MOB               */
/*************************************************/

// var player = {
//   name: 'Link',
//   hp: 100,
//   stamina: 100,
//   meleeDmg: 5,
//   rangedDmg: 3
// };

// var mob = {
//   name: 'FancySnake',
//   hp: 30,
//   attack: 5,
//   weaknessMelee: false,
//   weaknessRanged: true
// };


/***************************************************/
/*               PLAYER GETS HIT                  */
/*************************************************/


battle.getsHit = function(mob, player){

  player.hp -= mob.attack;  //player takes normal damage

  if (player.hp <= 0) {
    console.log('Game Over'); // TODO: have to do something to stop game here
  }
};


/***************************************************/
/*              PLAYER MELEE ATTACK               */
/*************************************************/


battle.attacksMelee = function(mob, player){

  if (player.stamina < 5) { //attacks need stamina to work

    console.log('You are out of stamina'); //Nothing happens

  } else {

    if (mob.weaknessMelee === false){  // mob has no melee weakness

      mob.hp -= player.meleeDmg; // mob gets hit for normal damage
      player.stamina -= 5; // player uses up stamina in attack

    } else {  // mob has melee weakness

      mob.hp -= player.meleeDmg * 0.3; // mob takes extra damage from melee attack
      player.stamina -= 5; // player uses up stamina in attack

    };
    if (mob.hp <= 0 && player.hp > 0) {
      console.log('You win, moving on!'); // TODO: do something to shift to next room
    }

  }
};


/***************************************************/
/*              PLAYER RANGE ATTACK               */
/*************************************************/


battle.attacksRanged = function(mob, player){

  if (player.stamina < 3) { //attacks need stamina to work

    console.log('You are out of stamina'); //Nothing happens

  } else {

    if (mob.weaknessRanged === false){  // mob has no ranged weakness

      mob.hp -= player.rangedDmg; // mob gets hit for normal damage
      player.stamina -= 3; // player uses up stamina in attack

    } else {  // mob has melee weakness

      mob.hp -= player.rangedDmg * 0.3; // mob takes extra damage from ranged attack
      player.stamina -= 3; // player uses up stamina in attack

    };
    if (mob.hp <= 0 && player.hp > 0) {
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

battle.evadeAttack = function(mob, player){

  var random = randomNumber(1,8);

  if (random < 3) {

    //Player Evade was successfull
    player.stamina += 3;  //Player gains stamina and does not get hit

  } else if (random < 5) {

    //Player Evade failed
    player.hp -= mob.attack;  //Player takes normal amount of damage and gains no stamina

  } else if (random < 7) {

    //Player Evade is kinda successfull A
    player.hp -= mob.attack * 0.5; //Player takes 50% of the damage
    mob.hp -= 5 * 0.5; //Player deals 50% damage to mob

  } else {

    //Player Evade is kinda successfull B
    player.hp -= mob.attack * 0.5; //Player takes 50% of the damage
    player.stamina += 1; //Player gains a small amount of stamina
  }
};

module.exports = battle;
