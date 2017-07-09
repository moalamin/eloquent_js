function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

var arr = [1, 2, 3, 4, 5];
console.log('reverArray([1,2,3,4,5]) ', reverseArray(arr));
console.log('passed array ', arr);

function reverseArrayInPlace(arr) {
  var length = arr.length;
  for (var i = length-1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  arr.splice(0, length)
  return arr
}

console.log('reverseArrayInPlace([1,2,3,4,5]) ', reverseArrayInPlace(arr));
console.log('passed array ', arr);
