function isEvenNo( element){
for(let i=2; i<7; i++)
{
    if(element / i ==0)
    {
        return false;
    }
  } return true;
}
let array=[3,9,7,6,19,27,53];
let primeCount=0;
for (const element of array) {
   if( isEvenNo(element))
   {
    primeCount++;
   }
}
console.log(` prime count : ${primeCount}`);
