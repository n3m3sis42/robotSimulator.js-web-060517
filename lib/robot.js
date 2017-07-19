'use strict';

class Robot {

  // intBearing: 0 = north, 2 = east, 3 = south, 4 = west
  setBearing () {
    if (this.intBearing === 0) {
      this.bearing = "north"
    } else if (this.intBearing === 1) {
      this.bearing = "east"
    } else if (this.intBearing === 2) {
      this.bearing = "south"
    } else if (this.intBearing === 3) {
      this.bearing = "west"
    }
  }

  at (x, y) {
    this.coordinates = [x, y]
  }

  orient (direction) {
    if (direction === "north") {
      this.intBearing = 0
      this.bearing = "north"
    } else if (direction === "east") {
      this.intBearing = 1
      this.bearing = "east"
    } else if (direction === "south") {
      this.intBearing = 2
      this.bearing = "south"
    } else if (direction === "west") {
      this.intBearing = 3
      this.bearing = "west"
    } else {
      throw Error("Invalid Robot Bearing")
    }
  }

  turnLeft () {
    if (this.intBearing === 0) {
      this.intBearing = 3
      this.setBearing()
    }
    else {
      this.intBearing--
      this.setBearing()
    }
  }
  turnRight () {
    if (this.intBearing === 3) {
      this.intBearing = 0
      this.setBearing()
    }
    else {
      this.intBearing++
      this.setBearing()
    }
  }

  advance () {
    switch (this.intBearing) {
      case 0:
        this.coordinates[1]++
        break;
      case 1:
        this.coordinates[0]++
        break;
      case 2:
        this.coordinates[1]--
        break;
      case 3:
        this.coordinates[0]--
        break;
      default:
        console.log("Invalid instruction")
    }
  }

  instructions (instruction) {
    let instArray =  []
    for (let i=0; i < instruction.length; i++) {
      if (instruction[i] === "L") {
        instArray = [...instArray, this.turnLeft.name]
        this.turnLeft()
      } else if (instruction[i] === "R") {
        instArray = [...instArray, this.turnRight.name]
        this.turnRight()
      } else if (instruction[i] === "A") {
        instArray = [...instArray, this.advance.name]
        this.advance()
      }
      // console.log(this.coordinates)
    }
    return instArray
  }

  place (obj) {
    this.at(obj.x, obj.y)
    this.orient(obj.direction)
  }

  evaluate (string) {
    this.instructions(string)
  }

};
