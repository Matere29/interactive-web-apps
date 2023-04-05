const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
//added brackets

//if(hourOfDay && (minuteOfDay !== null)){
   if((hourOfDay == 00) && (minuteOfDay == 00) ){
	let taxAsDecimal = parseInt(tax) /'100';
   let startingAfterTax = salary - taxAsDecimal;
  
   var balance = startingAfterTax - transport - food - rent;
}


console.log('R',balance.toFixed(2));