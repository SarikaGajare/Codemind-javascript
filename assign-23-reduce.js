const array=[20,11,40,25,37,49,9,90,60,2,19];
let array1=array.reduce((runningTotal,Element)=>{

    return runningTotal+Element;
},0);
console.log(`Using reduce method sum: ${array1}`);
sum=0;
for(let i=0;i<array.length;i++)
{
   sum=sum+array[i];
}console.log(`In Traditional Way Sum: ${sum}`);


const sumdivde5 = array.filter((element)=>{
    return element%5==0;
}).reduce( (runningTotalsum, element)=>{
    return runningTotalsum + element;
}, 0);
console.log(`Sum of divededby 5 No:   ${sumdivde5}`);