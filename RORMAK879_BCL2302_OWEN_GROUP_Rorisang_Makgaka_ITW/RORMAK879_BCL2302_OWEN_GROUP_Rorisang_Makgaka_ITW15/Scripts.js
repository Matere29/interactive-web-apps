const data = {
	lists: [
	  ['first', [15, 11, 13, 7, 5]],
	  ['second', [2, 6, 8, 4, 14, 12, 10]],
	  ['third', [9, 3, 1]],
	]
  };
  
  const result = [];

  function extractBiggest() {
    let biggest = null;
    let index = null;
    for (let i = 0; i < data.lists.length; i++) {
      const list = data.lists[i][1];
      const lastItem = list[list.length - 1];
      if (biggest === null || lastItem > biggest) {
        biggest = lastItem;
        index = i;
      }
    }
    if (index !== null) {
      result.push(biggest);
      data.lists[index][1].pop();
    }
  }
  
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
  console.log(result.flat());