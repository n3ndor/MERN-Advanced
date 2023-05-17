class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Ninja name is ${this.name}.`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10 health.`);
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().showStats()
