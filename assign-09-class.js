console.log(`1.stmt===>`);
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
const vehicle2 = new Vehicle("Venue", "4 wheeler", "mh-12", "Black");
vehicle2.detail();
const vehicle3 = new Vehicle("Activa", "2 wheeler", "mh-11", "red");
vehicle3.detail();
const vehicle4 = new Vehicle("Range Rover", "4 wheeler", "mh-14", "greay");
vehicle4.detail();

console.log(`2 stmt:===>`);

class College {
  constructor  (college_name,college_address,college_rank,univercity)
        {
            this.college_name=college_name;
            this.college_address=college_address;
            this.college_rank=college_rank;
            this.univercity=univercity;

        }
     display(){
 console.log (`College-Name:${this.college_name} 
             College-Address:${this.college_address}
             College-Rank: ${this.college_rank} 
             Univercity: ${this.univercity}`)};
    
    }
 const college1=new College("COEP", "pune","1","UniPune");
 college1.display();
const college2=new College("PVG","pune","5","UniPune");
college2.display();
const college3=new College("Shinhgad","splapur","3","solapur");
college3.display();
const college4=new College("fabtek","sangola","7","solapur");
college4.display();

