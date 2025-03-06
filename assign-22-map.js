const arrayNumber=[20,10,40,25,23,11,9,31,60,2,19];
const arrMap= arrayNumber.map((Element)=>{

    return Element+10;
}
);
console.log( ` After adding 10 in each element:${arrMap}`);
const cubeArr=arrayNumber.map((Element)=>{
return Element*Element*Element;
});
console.log(`Cube of evey element in array:  ${cubeArr}`);

const indexAdd=arrayNumber.map((Element,index)=>{

    return Element+index;
});
console.log(`array after adding index value to element:  ${indexAdd}`);

