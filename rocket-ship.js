//best guess- with Expand

class Spaceship {
 constructor (spaceshipName, spaceshipDrive) {   
 this.name = spaceshipName;
 this.drive = spaceshipDrive;

this.drive = this.drive.bind(this);
this.launch = this.launch.bind(this);

 }
}
drive(); {console.log(this.name + ' ' + topspeed + 'lyph'); }
launch(); { console.log(this.name + 'to infinity and beyond' + topspeed + '!'); } 

class DetailsSpaceship extends Spaceship {
    constructor (spaceshipName, spaceshipDrive) {  
        super(spaceshipName, spaceshipDrive);
         this.name= 'Galaxy Cruiser';
         this.drive= function(topspeed) 
    }
    };

 
Spaceship.drive(); 

Spaceship.launch();


