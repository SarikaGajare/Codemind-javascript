
 function stringHandsOn()
 {
    var str="   Hey yor are doging good, keep it up   ";
  console.log(`---1. statement---`);
   console.log(`Given String : ${str}`);

   console.log(`---2. statement---`);
    console.log(`Length Of String :${str.length}`);

   console.log(`---3. statement---`);
   var afterTrim=str.trim();
   var afterTrimLenth= afterTrim.length;
   console.log(`After Trim Of string: ${afterTrim}  || After trim Length Of String:${afterTrimLenth}`);

   console.log(`---4. statement---`);
    var extraSpace = str.length - afterTrimLenth.length;
    console.log(`Extra Space In String: ${extraSpace}`);


    console.log(`---5. statement---`);
    var fristChar=afterTrim.charAt(0);
    var lastchar=afterTrim.charAt(afterTrimLenth-1);
    console.log(`Frist char Of string:${fristChar}|| Last Char Of String: ${lastchar} `);

    
    console.log(`---6. statement---`);
    var totalWord=afterTrim.split(" ") ;
    
console.log(`Total Word In String: ${totalWord.length }`);
var indexOfGood= afterTrim.indexOf("good");
console.log(`Index Of good: ${indexOfGood}`);
var substr=afterTrim.substring(22);
console.log(`Print the substring starting At22: ${substr}`);
var endup=afterTrim.endsWith("up");
console.log(`Is string End with up: ${endup}`);
var atrtup=afterTrim.startsWith("Hey");
console.log(`Is string Start with up: ${atrtup}`);
}

 stringHandsOn()
 