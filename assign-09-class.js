class Vehicle{
    // Data members
    // Constructor
    constructor(name, wheels, passing, color){
        this.name = name;
        this.wheels = wheels;
        this.passing = passing;
        this.color = color;
    }

    // Member Function
    detail(){
        console.log(`Name: ${this.name}, wheels-2/4: ${this.wheels}, passing city: ${this.passing}, color: ${this.color}`);
        
    }
}
const vehicle1 = new Vehicle("Maruti swift", "4 wheeler", "mh-13", "white");
vehicle1.detail();
//console.log(vehicle1);