function countBs(word){
  count = 0;
  for(var i = 0; i < word.length; i++){
    if (word.charAt(i) === "B") count+=1
  }
  return count;
}

console.log( "Big Blue: " + countBs("Big Blue") );

function countChars(word, letter){
  count = 0;
  for(var i = 0; i < word.length; i++){
    if (word.charAt(i) === letter) count+=1
  }
  return count;
}

console.log( "Sea Shells Sea Shells By the Sea Shore --- S: " + countChars("Sea Shells Sea Shells By the Sea Shore", "S") );
