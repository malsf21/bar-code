var rhymes = [];
var rhyme = "";
function findRhymes(ending, dictionary){
  if (rhyme != ending){
    //console.log("Finding Rhymes");
    rhymes = [];
    endsize = ending.length;
    for (i = 0; i < dictionary.length; i++){
      word = dictionary[i];
      wlength = word.length;
      if (word.substring(wlength-endsize,wlength) == ending){
        rhymes.push(word);
      }
    }

    rhyme = ending;
  }
}

function getRhyme(amount){
  //console.log("Getting Rhyme");
  answer = "";
  for (i = 0; i < amount; i++){
    answer += rhymes[Math.floor(Math.random() * rhymes.length)] + " ";
  }
  return answer.slice(0, -1);
}

function getRandomWord(amount){
  //console.log("Getting Random Word");
  answer = "";
  for (i = 0; i < amount; i++){
    answer += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return answer.slice(0, -1);
}

function constructLine(nonrhyme, rhyme, prefix, suffix, middle){
  middle = middle || false;
  prefix = prefix || false;
  suffix = suffix || false;
  //console.log("Constructing Line");
  line = "";
  if (prefix != false && prefix != undefined && prefix != "undefined"){
    line += prefix + " ";
  }
  line += nonrhyme;
  if (middle != false && middle != undefined && middle != "undefined"){
    line += " " + middle;
  }
  line += " " + rhyme;
  if (suffix != false && suffix != undefined && suffix != "undefined"){
    line += " " + suffix;
  }
  line += ",";
  return line.charAt(0).toUpperCase() + line.slice(1);
}

$("#newline").click(function(){
  findRhymes($("#ending").val(), words);
  output = constructLine(getRandomWord($("#length").val()), getRhyme(1), $("#prefix").val(), $("#suffix").val(), $("#middle").val()) + "</br>";
  $("#output").append(output);
});

$("#clear").click(function(){
  $("#output").empty();
});

findRhymes($("#ending").val(), words);
var random = constructLine(getRandomWord(2), getRhyme(1), "Hey lil'", "ayy", "boy");
$("#flavour").html(random.slice(0, -1));
