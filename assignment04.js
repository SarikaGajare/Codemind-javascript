function  squareOfWorldLength(string)
{
    
var strlenth= string.length;
console.log( `StringLength:${strlenth}`);
var squareOfLength=strlenth * strlenth;
console.log(`Square of Length:${squareOfLength}`);

}
squareOfWorldLength("JavaScript");
squareOfWorldLength(" Google Chrome");
squareOfWorldLength("Web Developer Smart");
function something()
{
 var str2="i am UI Developer";
 var worldlength=str2.length;
 var word=str2.split(" ").length;
 var result=worldlength/word;
 console.log(`Length Divided By total Word ${result}`);
 var result1=worldlength*word;
 console.log(`String Length Multiply By total word:${result1}`);
}
something();