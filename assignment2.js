console.log(` 1.Statement`);
let bankName;
console.log(`BankName:${bankName}  || Type of Data: ${typeof(bankName)}`);
console.log(`Bank Name: ${bankName="SBI Bank"} || Type of Data: ${typeof(bankName)}`);

console.log(` 2.Statement`);
let marks= "90%";
console.log(`Mark: ${marks} ||Type of Data Mark: ${typeof(marks)}`);

console.log(` 3.Statement`);
let isWorking;
console.log(`Is Working Data Type: ${typeof(isWorking)}`);
let isWorking1= true;
console.log(`Is Working: ${Boolean(1)} || Is Working Data Type: ${typeof(isWorking1)}`);

console.log(` 4.stetement --> A`);
let totalCount="Hundred and seven";
console.log(`Totle Count: ${totalCount} || Data Type of TotalCount: ${typeof(totalCount)}`);


console.log(` 4.stetement --> B`);
afterReplceTotleCount=totalCount.replace("Hundred and seven",107);
console.log(`Updated TotalCount: ${ afterReplceTotleCount}|| Data type Of TotalCount: ${typeof(afterReplceTotleCount)}`)