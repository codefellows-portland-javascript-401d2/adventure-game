import Monster from './monster';
const gameState = {};

gameState.levels = [
  {
    title: 'Intro',
    enemy: null,
    text: 'Cold raindrops slowly drizzle upon your face as you sluggishly open your eyes. The storm clouds are thick in the sky and the meadow you lie in is already wet and muddy. You turn your head, looking around trying to get your bearings. As lighting strikes an old oak not too far from you, your memories suddenly come rushing back. Your crush, your intended, the love of your life! Gone, no worse - taken! You were out on a leisurely stroll with the princess/prince (hey, whatever rocks your boat, dude) when the evil, mean super villain Baddie Blanon showed up and stole your love away! He put a spell on you and you just could not stop hitting yourself! You still feel the urge even now. You must have knocked yourself out. At least all those hours in the gym seem to be paying off.You have seen enough superhero movies to know that this is your time to shine. You’ll find Blanon’s super-secret lair and rescue the princess/prince! S/he will be so overcome with gratefulness and so impressed with your amazing deed s/he will fall straight into your arms. Result! But where to start?'
  },
  {
    title: 'Sewers',
    enemy: null,
    text: 'As you enter the room you are immediately hit by the smell. To your surprise it’s delightfully pleasant. Could this really be the sewers? You decide to bust out those Sherlock moves again and investigate your surroundings. Upon closer inspection you realize that you are indeed ankle-deep in waste. But, what’s this? Everything seems strangely……rainbow-colored? Now it all makes sense! You must be in the sewers right below the Unicorn Latrines! Suddenly you hear a noise behind you...'
  },
  {
    title: 'Battle in the Sewers',
    enemy: new Monster('Fancy Snakes', 30, 5, 0.9, 'r'),
    text: 'You come face to face with a coterie of Fancy Snakes. You know, like normal Snakes only way more fancy. They squint meanly at you from below their top-hats and hiss dangerously.'
  },
  {
    title: 'Dungeon',
    enemy: null,
    text: 'You come up the stairs huffing and puffing. What a climb! You slowly take in your surroundings. You’re in a long corridor with jail cells on either side. At the far end is a table loaded with all kinds of whips, chains and other assorted torture equipment. Not that you know what any of it is. You only heard about these things. Once. From a friend. You don’t talk to them anymore. Also, you make a note to yourself to delete your browser history as soon as you get home. No, no reason. What?  Uh, anyway…..you realize that you have now entered the dungeons. You hear a laugh coming from one of the cells.'
  },
  {
    title: 'Battle in the Dungeon',
    enemy: new Monster('Dancing Bears', 30, 5, 0.9, 'r'), 
    text: 'You come face to face with a troupe of Dancing Bears. They shimmy and shake, their big fluffy bear butts swaying from side to side. The biggest, meanest looking one gestures for you to step forward. You have been challenged to a dance-off! '
  },
  {
    title: 'Antechamber',
    enemy: null,
    text: 'You peek around the corner - better safe than sorry - only to find yourself in a rather small, completely unimpressive room. If years of reading historic romance novels (you know, the good ones with Fabio on the cover) have taught you anything (apart from how the princess/prince will definitely marry you after this rescue) it’s that you are now definitely in a so-called antechamber. Which is a fancy word for a small, and pretty much useless room rich people put in their castles. Well, at least you have a good view of the entire room and can just breeze through to the doors on the other side.'
  },
  {
    title: 'Battle in the Antechamber',
    enemy: new Monster('Prancing Unicorns', 30, 5, 0.9, 'r'),
    text: 'You come face to face with a capricious herd of Prancing Unicorns. They are super glamorous with their shiny hair and flowing, luscious manes. Their glorious horns sparkle even in the dimness of the room. With a smirk you call them ‘Prancing Ponies’. They don’t get the reference. You decide they need to die.'
  },
  {
    title: 'Oratory',
    enemy: null,
    text: 'You walk through the door and immediately recognize it as an Oratory. More than that it’s a pretty little Oratory all decked out for…….a wedding?!? Blanon intends to marry the princess/prince! Anger courses through your body. Years of flirting, subtle hints and sweaty palms finally seemed to be going somewhere and now this evil, mean super villain swoops in and intends to steal your price, uh I mean love?  Over your dead body! Which unfortunately becomes a definite possibility here as you realize you are not alone.'
  },
  {
    title: 'Battle in the Oratory',
    enemy: new Monster('OctoCat', 30, 5, 0.9, 'r'),
    text: 'You come face to face with a bevy of Coding Octocats. These freaks of nature are half cute, half hideous and completely obnoxious. They usually gather a cult of nerdy Nerds around them as guards but today you lucked out and they are by themselves. Don’t get too comfortable though these things are as mean as it gets!'
  },
  {
    title: 'Base of the High Tower',
    enemy: null,
    text: 'You find yourself at the bottom of a tower with a spiraling staircase seeming to go up endlessly. A lifetime spent playing video games has taught you one important lesson. The boss is always at the end of the dungeon and the princess/prince is kept in the highest tower. Both these things seem to conveniently come together right here. You are definitely in the right spot! Gripping your {{weapon1}} and your {{weapon2}} tightly you start the long climb.'
  },
  {
    title: 'Final Battle',
    enemy: new Monster('Evil Wizard Blanon', 1000, 25, 0.8, 'r'),
    text: 'You come face to face with the evil, mean super villain Baddie Blanon himself! “Ha, ha!”, he gloats “the princess/prince is mine! I cannot be defeated! Many ninjas, wizards, warriors and even pirates have tried. None survived. Prepare for your death!”. You smirk. Where all the others have failed you shall succeed. “I am not one of these things” you inform him-who-we-have-already-named, and he grows even more confident as he starts to attack. '
  }
];






module.exports = gameState;