function chirp(n){
  let tweet = "chirp ";
  
  if (n === 1){
    return tweet;
  }
  
  return tweet + chirp(n-1);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});