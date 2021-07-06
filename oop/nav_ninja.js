class Ninja {
    constructor(name, health, speed = 3, stregth = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.stregth = stregth;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`Name:${this.name}, Health:${this.health}, Speed:${this.speed}, Stregth:${this.stregth}`);
    }
    drinkSake(){
        this.health += 10
        console.log(this.health);
    }
}

const ninja1 = new Ninja("Hyabusa", 100, 5, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();