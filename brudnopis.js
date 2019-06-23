var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var scoresLength = scores.length; 
var number = 0;
var testNumber = 0;
var indexNumber= 0;

function printAndGetHighScore(scores){
while (number != scoresLength){
    
    console.log(`Płyn do baniek nr ${testNumber} ma wynik ${scores[indexNumber]}`);
    number = number + 1;
    testNumber = testNumber + 1;
    indexNumber = indexNumber +1;
    
}

var highScore = Math.max.apply(this, scores);
return highScore;
}
var highScore = printAndGetHighScore(scores);

function getBestResults(scores, highScore){
var bestSolutions = [];

for(var i = 0; i < scores.length; i++){
    
    if(scores[i] == highScore) {
        bestSolutions.push(i);
    }
    return bestSolutions;
}
}

var bestSolutions = getBestResults(scores, highScore);

console.log(`Testy z największym wynikiem to testy z indeksem ${bestSolutions}`);
console.log(`Liczba testów ${scoresLength}`);

console.log(`Najwyższy wynik to ${Math.max.apply(this, scores)}`);
console.log(`Najniższy wynik to ${Math.min.apply(this, scores)}`);
console.log(highScore);

