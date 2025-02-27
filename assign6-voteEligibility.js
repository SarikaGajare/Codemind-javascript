
var voteEligible=function(age)
{
if(age>=18)
    {
        console.log(`Age: ${age} Eligible For Vote`);
        
    } 
    if(age==0 || age<0 || age<=130 || age==null)
        {
            
         }
    
    else
    {
        console.log(`Age noe ligible for Vote:`);
    
    }
 if(age==0 || age<0 || age<=130 || age==null)
    {
        console.log(`Invalid data:${age}`)
     }

}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(-10);
voteEligible(200);
voteEligible(null);
voteEligible(0);
