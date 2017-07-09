function isEven(num) {
  if (num == 0) return true;
  if (num == 1) return false;
  return isEven(Math.abs(num - 2));
}

console.log("50 is even: " + isEven(50) );
console.log("75 is even: " + isEven(75) );
console.log("-1 is even: " + isEven(-1) );
console.log("-50 is even: " + isEven(-50) );
console.log("-75 is even: " + isEven(-75) );
