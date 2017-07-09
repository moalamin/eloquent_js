var num = 8;
var board = "";

for(var i = 1; i <= num; i++){
  for(var j = 1; j <= num; j++){
    if( (j+i) % 2 === 0){
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}

console.log(board);
