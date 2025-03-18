function isPalendrome(str){
   let RevString= str.split('').reverse().join('');
   return str===RevString;
   }
let str1=isPalendrome("madam");
console.log(`string "madam" is palendrome: ${str1}`);

let str2=isPalendrome("141");
console.log(`string  " 141"is palendrome: ${str2}`);

let str3=isPalendrome("Sunday");
console.log(`given string "sunday" is palendrome: ${str3}`);

let str4=isPalendrome("mom");
console.log(`string "Mom" is palendrome: ${str4}`);
let str5=isPalendrome("listen");
console.log(`string "listen" is palendrome: ${str5}`);
let str6=isPalendrome("dad");
console.log(`string "dad" is palendrome: ${str6}`);