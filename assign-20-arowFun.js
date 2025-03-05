let stmt1 = () =>{
    console.log(`Good Morinig, today is Wednesday`);
}
 stmt1();
 let stmt2 =(num1,num2,num3=1) =>{
    let res = num1*num2*num3;
    console.log(`multiplicatin : ${res}`);
}
stmt2(5,5,2);
stmt2(10,4);
let stmt3 = (n1,n2,n3,n4,n5) =>{
   let add=n1+n2+n3+n4+n5;
  return add;
    
}
let addResult =stmt3(100,100,200,349,756);
let stradd =stmt3("i am" ," learning " ," ES6  " ," features " ," in depth.");
console.log(`Addtion of number: ${addResult}`);
console.log( `Addition of String: ${stradd}`);