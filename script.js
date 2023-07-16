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
        console.log('alien hull ' + alien.hull);
        console.log('human hull ' + human.hull)
        if(Math.random() <= this.accuracy){
        alien.hull -= human.firepower;
        }
        else{
            console.log('I fired, and I missed')
        }
        console.log('alien hull ' + alien.hull);
    }
}

const S1 = new HumanShip();
/*
hull - between 3and 6
firepower - between 2and 4
accuracy - between .6and .8
*/
class AlienShip extends Ship{
    constructor(hull,savedHull,firepower,accuracy)
    {
        super(hull,firepower,accuracy);
        this.hull = Math.floor(Math.random() * (7-3) + 3);
        this.firepower = Math.floor(Math.random() * (5-2) + 2);
        this.accuracy = Math.random() * (.9 - .6) + .6;
    }
}
const AS1 = new AlienShip();

S1.fire(S1,AS1);