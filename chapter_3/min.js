function min (first, second) {
  var answer = first < second ? first : second;
  return answer;
}

console.log("4 and 5: " + min(4,5) );
console.log("100 and 5: " + min(100,5) );
console.log("23 and 23: " + min(23,23) );
