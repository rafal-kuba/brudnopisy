var alfabet = ["a", "b", "i", "d", "e", "f", "g", "h", "i", "j", "k", "j", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var volwes = ["a", "e", "i", "o", "u"];

let j = 0;


    for (i=0; i < alfabet.length; i++){
      
      
      if (alfabet[i] == volwes[j]){
        console.log(alfabet[i]);
        console.log(`Litera ${alfabet[i].toUpperCase()} jest samogloska. Jej numer indeksu w alfabecie to ${i}`);
        j = j + 1;
        i = -1;
      } else {
        continue;
        
      }
      
    }
