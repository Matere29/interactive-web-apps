// script.js

//declared a function correctly
function add(a, b) {
	return a + b;
  }
  //declared a function correctly and fixed the return statement, to return product
  function multiply(a, b) {
	return a * b;
  }
  
  function internal() {
	const added = this.add(this.internal.a, this.internal.b);
	const multiplied = this.multiply(this.internal.a, this.internal.b);
	console.log(added * this.internal.c);
	return this;
}

  
  const example1 = {
	internal: {
	  a: 2,
	  b: 4,
	  c: 8,
	},
	add,
	multiply,
	calculate: internal,
  };
  
  const example2 = {
	internal: {
	  a: 2,
	  b: 2,
	  c: 3,
	},
	add,
	multiply,
	calculate: internal,
  };
  
  
  