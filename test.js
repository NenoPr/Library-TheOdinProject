
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


  let divDisplay = document.createElement("div")
  divDisplay.className += "change-Read-Status-div"
  
  let pInfoChoose = document.createElement("p")
  pInfoChoose.textContent = "Change read Status to:"

  let divChangeToRead = document.createElement("div")
  divChangeToRead.className += "changeToRead"
  divChangeToRead.textContent = "Read"

  let divChangeToReading = document.createElement("div")
  divChangeToReading.className += "changeToReading"
  divChangeToReading.textContent = "Reading"

  let divChangeToNotRead = document.createElement("div")
  divChangeToNotRead.className += "changeToNotRead"
  divChangeToNotRead.textContent = "Read"

  let divCancelReadStatusChange = document.createElement("div")
  divCancelReadStatusChange.className += "cancelReadStatusChange"
  divCancelReadStatusChange.textContent = "Read"


  divDisplay.appendChild(pInfoChoose);
  divDisplay.appendChild(divChangeToRead);
  divDisplay.appendChild(divChangeToReading);
  divDisplay.appendChild(divChangeToNotRead);
  divDisplay.appendChild(divCancelReadStatusChange);

  divElement.appendChild(divDisplay);