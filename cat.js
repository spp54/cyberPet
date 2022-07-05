const { animal } = require("./animal");

class cat extends animal {
  constructor(name, happiness, cleanliness) {
    super(name, happiness, cleanliness);
    this.happiness = 100;
    this.cleanliness = 100;
  }

  plays() {
    this.happiness += 20;
    this.hunger -= 20;
    console.log(
      `${this.name} played with a ball of yarn! Their happiness is now ${this.happiness}`
    );
  }

  clean() {
    this.cleanliness += 10;
    console.log(
      `${this.name} Has been washed! their cleanliness is ${this.cleanliness}`
    );
  }
}

module.exports = { cat };
