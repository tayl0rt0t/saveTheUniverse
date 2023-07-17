/**
 * A game round would look like this:
You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again ... etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
You lose the game if you are destroyed
 */
/*Ship Properties
hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
firepower is the amount of damage done to the hull of the target with a successful hit
accuracy is the chance between 0 and 1 that the ship will hit its target
Your spaceship, the USS Assembly should have the following properties:
hull - 20
firepower - 5
accuracy - .7

 * REMEMBER BIND YOUR METHODS IF YOU PLAN TO USE THEM AS EVENT Listeners !!!!!!!
 
*/
const ps = require("prompt-sync")
const prompt = ps();
class Ship{
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
class HumanShip extends Ship{
    constructor(hull,firepower,accuracy){
        super(hull,firepower,accuracy);
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    fire(human,alien){
        if(Math.random() <= this.accuracy){
        alien.hull -= human.firepower;
        console.log('YOU HIT THE ALIEN!')
        console.log('--Alien hull damage report: Alien hull is now at ' + alien.hull + '%--');
        }
        else{
            console.log('I fired, and I missed')
        }
    }
    retreat(){
        let question = prompt('Would you like to retreat While we still have a chance? ')
        if(question == "yes"){
            console.log("You tried your best, Cap'n. Nobody can fault you for returning to base. We're attempting to negotiate a cease fire with the invaders as we speak. Hopefully, they evolved with the capacity for mercy...")
            a = false;
        }
        else if(question == 'no'){
            console.log("That's the spirit, cap. Go get em!")
        }
    }
    destroyed(){
        console.log("Rest in peace, Cap'n. You tried your best. We'll try our best to take it from here.")
        a = false;
    }
    
}

const S1 = new HumanShip();
/*
hull - between 3and 6
firepower - between 2and 4
accuracy - between .6and .8
*/
class AlienShip extends Ship{
    constructor(hull,firepower,accuracy)
    {
        super(hull,firepower,accuracy);
        this.hull = Math.floor(Math.random() * (7-3) + 3);
        this.firepower = Math.floor(Math.random() * (5-2) + 2);
        this.accuracy = Math.random() * (.9 - .6) + .6;
    }
    fire(alien,human){
        if(Math.random() <= alien.accuracy){
            human.hull -= alien.firepower;
            console.log("!*!*!YOU'VE BEEN HIT!*!*!")
            console.log("!!!DAMAGE REPORT! SHIELDS AT " + human.hull + "%!!!");
        }
        else{
            console.log("They fired, and they missed.")
        }
    }
}
const AS1 = new AlienShip();
const AS2 = new AlienShip();
const AS3 = new AlienShip();
const AS4 = new AlienShip();
const AS5 = new AlienShip();
const AS6 = new AlienShip();
const ALIENS = [];
ALIENS.push(AS1,AS2,AS3,AS4,AS5,AS6)

console.log(`You are the Captain of the USS Assembly, an UwU class space fighter. This ship is a classified prototype, the first of it's kind. The only ship on planet Earth that's been specifically designed for combat in space. For the first time in recorded history, extraterrestrial intelligence has made contact with our planet, and judging by the initial barrage of energy weapons they've fired on military bases and energy infrastructures, they do not come in peace. So far, the invaders have stayed in orbit and have not entered our atmosphere, opting to fire at us from space. This won't last, and it's obvious they plan on landing soon, due to the change in their formation. The time to do the most damage is now, before they land, where we'll need to fight them with conventional weapons. The militaries of the world are for once united against a common foe, and the eyes of the world are on you, Captain. This is make or break. Make this one count.`)
console.log(`-----ENEMY SHIP SIGHTED. WE ARE WEAPONS-FREE AND CLEAR TO ENGAGE. ALL SYSTEMS NOMINAL. SAY THE WORD, CAP-----`)
let counter = 5;
let a = true;
while (a == true){
    if(S1.hull <=0){
        S1.destroyed();
    }
    if(counter < 0){
        console.log("*_*_*_*_*CAPTAIN! I CAN'T BELIEVE IT, WE'VE WIPED THEM OUT! THEY'RE ALL GONE! LET'S RETURN TO BASE AND HAVE AN ICE COLD NON-ALCOHOLIC BEVERAGE WITH THE TROOPS!*_*_*_*_*")
        a = false;
        break;
    }
    let answers = prompt('**PRESS ENTER TO FIRE!**');
    if (answers == 'q'){
        console.log('goodbye');
        a = false;
        break;
    }
    S1.fire(S1, ALIENS[counter]);
    
    if(ALIENS[counter].hull >= 1){
    answers = prompt(`They're gonna shoot! Brace for impact!`);
    ALIENS[counter].fire(ALIENS[counter],S1);
    }
    if(ALIENS[counter].hull <= 0){
        if(counter > 1){
        console.log("CAPTAIN! ANOTHER SHIP! GET READY TO FIRE!")
        S1.retreat();
        }
        counter --;
    }
}
