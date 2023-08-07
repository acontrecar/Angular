export function whatMyTyme<T>(argument: T): T {
  return argument;
}

const amIsString = whatMyTyme<string>("Hello World");
const amIsNumber = whatMyTyme<number>(100);
const amIsArray = whatMyTyme<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(amIsString.split(" "));
console.log(amIsNumber.toFixed(2));
console.log(amIsArray.join(", "));
