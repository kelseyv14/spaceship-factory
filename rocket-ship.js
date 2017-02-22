// Object Literal
var car = {
    make: 'Toyota',
    model: 'Prius',
    drive: function(speed) {
        console.log(this.make + ' ' + this.model + ' is driving ' + speed + 'mph.')
    }
}

// Call the drive method with a speed argument value of 65
car.drive(65)
// Object New
var car = new Object()
car.make = 'Toyota'
car.model = 'Sienna'
car.drive = function(speed) {
    console.log(this.make + ' ' + this.model + ' is driving ' + speed + 'mph.')
}

// Call the drive method with a speed argument value of 35
car.drive(35)
// Constructor Function
var Vehicle = function() {
    this.make = 'Toyota'
    this.model = '4Runner'
    this.drive = function(speed) {
        console.log(this.make + ' ' + this.model + ' is driving ' + speed + 'mph.')
    }
}

var car = new Vehicle()

// Call the drive method with a speed argument value of 85
car.drive(85)
// Class
class Vehicle {
    constructor() {
        this.make = 'Toyota'
        this.model = 'Yaris'
    }

    drive(speed) {
        console.log(this.make + ' ' + this.model + ' is driving ' + speed + 'mph.')
    }
}

var car = new Vehicle()

// Call the drive method with a speed argument value of 55
car.drive(55)