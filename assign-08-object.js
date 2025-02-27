let professor ={
  name:"patil",
  experiance: 10,
  subject:"Microprocessor",
  department:"Computer",
  degrees:{
    engineering:"CSE",
    PHD:"adv_computing",
    graduation :"Mcs ",
    HscBord:" MH-state",
  },
  certificate:["hackaer rank participation","certificate in IFE course","Certificate in Adv Programming"],

}

console.log(professor);
//console.log(`1 statement result:${professor}`);
console.log(`1 statement result:${professor.name}`);
console.log(professor.degrees);
//console.log(`2nd statement result:${professor.degrees}`);
console.log(professor.certificate);
console.log(`after adding new property:`);
professor.totalExperience = 14;
console.log(professor);

