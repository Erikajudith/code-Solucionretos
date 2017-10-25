function findShortestOfThreeWords(word1,word2,word3){
  var a= word1.length;
  var b= word2.length;
  var c= word3.length;
  if(a <= b && a <= c){
    return word1
  }else if(b < a && b < c){
    return word2
  }else {
    return word3
  }
}

findShortestOfThreeWords("muebleria","pizarron","descanso");
