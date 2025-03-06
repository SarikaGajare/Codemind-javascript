const arrayNumber=[1,-7,40,502,-77,91,0,108,89,-601]

console.log(`Array Element:`);
arrayNumber.forEach((element,index) =>{
  console.log(` index ${index} :${element} `);
}
);
arrayNumber.forEach(( element)=>{
    if(element>0)
    {
        console.log(`possitive no:${element}`);
    }
    });
    let negativeNo_Array=[]
    arrayNumber.forEach(( element) =>{
        if(element<0)
        {
            //console.log(`Negative no:${element}`);
            //negativeNo_Array.push(element);
            negativeNo_Array.unshift(element);
        }
    });
    console.log(negativeNo_Array)

    arrayNumber.forEach((element)=>{
        if(element%2==0){

            console.log( ` Even no: ${element}`);
        }
        });
        sum=0;
        arrayNumber.forEach(( element)=>{
        sum=sum+element;
      });
      console.log(`sum of Array: ${sum}`);
      arrayNumber.forEach((element,index)=>{
        if(index%2==0)
        {
            console.log(`even Index element:${element}`);
        }

      });
