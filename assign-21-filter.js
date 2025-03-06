const array=[20,10,40,25,37,49,9,90,60,2,19];
let array1=array.filter((element)=>{
    return element>50;
});
console.log(`Number greter than 50 =  ${array1}`);
let array2=array.filter((element)=>{
return element%2==0;
});
console.log(`Even no in array= ${array2}`);
let array3=array.filter((element)=>{
return element%2==1;
});
console.log(`odd no in array: ${array3}`);
let array4=array.filter((element)=>{
    return element%5==0;
});
console.log(`Element which divided by 5= ${array4}`);
let array5=array.filter((element)=>{
return element>20 && 50<element
});
console.log(`Number between 20-50: ${array5}`);
