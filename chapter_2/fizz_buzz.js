//initial version
for(var i = 1; i <= 100; i++){
  if(i%5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0){
    console.log("Fizz")
  } else {
    console.log(i);
  }
}

//with fizz-buzz
for(var i = 1; i <= 100; i++){
  if(i%(3*5) === 0) {
    console.log("FizzBuzz")
  } else if(i%5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0){
    console.log("Fizz")
  } else {
    console.log(i);
  }
}

//eloquent js
for(var i = 1; i <= 100; i++) {
  var output = "";
  if (i%3 === 0) output += "Fizz";
  if (i%5 === 0) output += "Buzz";
  console.log(output || i);
}
