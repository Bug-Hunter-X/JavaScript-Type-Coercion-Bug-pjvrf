function foo(a,b){
  //Type checking and error handling
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error("Inputs must be numbers");
  }
  return a+b;}
console.log(foo(1,2)); //This will return 3
console.log(foo(1, "2")); // This will throw an error because the input is a string.