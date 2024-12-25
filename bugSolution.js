function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Or throw an error: throw new Error('Arguments cannot be null or undefined');
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(undefined,2));//null