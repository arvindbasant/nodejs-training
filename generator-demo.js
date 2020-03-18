// Generator fn -> can be paused and resumed
// it creates generator obj
// state of the fn is stored
// return a gen obj -> iterators, which having a method next
// lazy execution

function* genFunc() {
  console.log('starting');
  let x = 5;
  yield x; // return and pause the func
  x++;
  let y = yield x;
  return x + y;
}

let iterator = genFunc();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next(5));
