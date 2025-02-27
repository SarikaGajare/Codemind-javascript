 
 var greterNumber= function (n1 ,n2)
 {
 var result=n1>n2 ? n1:n2;
 console.log(`Greter No:${result}`);

 }
 greterNumber(10,-10);
 greterNumber(800,899);
 
 var isEvenOrOddNum =function(num)
 {
    var result=(num%2)==0 ? "even" : "Odd";
     return result;
 }
 var returnvalue=isEvenOrOddNum(29);
 console.log(`Given No is : ${returnvalue}`);
 var returnvalue=isEvenOrOddNum(44);
 console.log(`Given No is : ${returnvalue}`);
 var returnvalue=isEvenOrOddNum(0);
 console.log(`Given No is: ${returnvalue}`);
 var returnvalue=isEvenOrOddNum(101);
 console.log(`Given No is: ${returnvalue}`);

 var wordLength =function(word)
 {
    var result=(word.length%2)==0 ? "even" : "Odd";
     return result;
 }
 var returnvalue=wordLength("JavaScript");
 console.log(`Given world length : ${returnvalue}`);
 var returnvalue=wordLength("Developer");
 console.log(`Given world length : ${returnvalue}`);
 var returnvalue=wordLength("google");
 console.log(`Given world length : ${returnvalue}`);


