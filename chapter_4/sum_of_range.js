function range(start, end, step) {
  var arr = [];
  for(var i = start; start > end ? i >= end : i <= end; i+=arguments[2] ? arguments[2] : 1){
    arr.push(i)
  }
  return arr;
}
console.log(range(1,10))

function sum(arr) {
  return arr.reduce(function(sum, val) {
      return sum+=val
  })
}

console.log(sum(range(1,10)), "\n");

console.log("Stepping by 2 range: ", range(1 ,10, 2));
console.log("Stepping by 2 sum : ", sum(range(1 ,10, 2)), "\n");

console.log("Reverse range: ", range(5 ,2, -1));
console.log("Reverse range sum : ", sum(range(5 ,2, -1)));
