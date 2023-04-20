const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const  first =  data.lists.first[0][0]
const second =  data.lists.second[1][0]
const  third = data.second.third[2][0]

//distructuring an array of objects
//const { lists: [[, first], [, second], [, third]] } = data;
const result = []

const extractBiggest = () => {
	//access the last array using first.length - 1 array
	if (first[first.length-1] > second[second.length-1]) {
		return lists.first
	}

	if (third[0] < 1) {
		return second
	}
	
	return third
}

/*

const result = []

const extractBiggest = () => {
	if (first[first.length-1] < second[second.length-1]) {
		return second;
	}

	if (third[0] > 1) {
		return third
	}
	
	return first;
}
*/
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)