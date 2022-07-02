
class Animal {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep() {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    play() {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  }
  class Dog extends Animal {
    constructor(name, energy, breed) {
      super(name, energy)
      this.breed = breed
    }
    bark() {
      console.log('Woof Woof!')
      this.energy -= .1
    }
  }

  const dogo = new Dog("doogo",10,"breed name1")
  console.log(dogo.eat(10))