//corrected variables declaration
let date = 2050
const status= 'student'
let count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	//I removed "let" since count is declared as global variable
	count = count + 4

	//fixed comparison notation
	if (status === "student") {
	  console.log('June', 'Youth Day')
	 count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	//removed let
	count = count + 3

	if (status === "parent") {
	  console.log(date, 'Christmas Day')
	  count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	//removed let
	count = count + 1
}
date= 2050
console.log(" ")

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)