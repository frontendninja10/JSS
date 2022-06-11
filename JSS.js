function Range(from, to) {
  this.from = from;
  this.to = to;
}

let r = new Range(1, 3);
console.log(r); // Create a Range object; note the use of new
// r.includes(2); // => true: 2 is in the range
// r.toString(); // => "(1...3)"
// [...r]; // => [1, 2, 3]; convert to an array via iterator
