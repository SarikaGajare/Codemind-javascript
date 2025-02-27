
//January, February, March, April, May, June, July, August, September, October, November, and December
function monthOfYear(month)
{
 switch (month)
 {
              case 1:
              console.log(`${month} : January`);
              break;
            case 2:
            console.log(`${month} : Febuary`);
            break;
            case 3:
            console.log(`${month} : March`);
            break;
            case 4:
            console.log(`${month} : April`);
            break;
            case 5:
            console.log(`${month} : may`);
            break;
            case 6:
            console.log(`${month} : June`);
            break;
            case 7:
            console.log(`${month} : Jule`);
            break;
            case 8:
            console.log(`${month} : August`);
            break;
            case 9:
            console.log(`${month} : Septembe`);
            break;
            case 10:
            console.log(`${month} : October`);
            break;
            case 11:
            console.log(`${month} : November`);
            break;
            case 12:
            console.log(`${month} : December`);
            break;
               
         default :
         console.log(`${month} : Invalid Input`);
         break;
                
 }
 
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);