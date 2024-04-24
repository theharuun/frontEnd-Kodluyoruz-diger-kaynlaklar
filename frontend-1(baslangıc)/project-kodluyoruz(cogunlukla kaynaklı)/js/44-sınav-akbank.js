// function SimpleAdding(num) { 
   

//     let toplam=0;
//     for(let i=1;i<=num;i++)
//     {
//         toplam+=i;
//     }


//     return toplam; 
  
//   }
     
//   // keep this function call here 
//   console.log(SimpleAdding(readline()));


// function RunLength(str) { 
 
//     var sikistirilmisString='';
//     var count=1;
//     var varOcg; // variable named varOcg as per requirements
    
//     for(let i=0; i < str.length;i++)
//    {
//      if(str[i]===str[i+1])
//      {
//        count++;
//      }
//      else
//      {
//        sikistirilmisString+=count+str[i];
//        count=1;
//      }
//    }
   
   
//      return sikistirilmisString; 
   
//    }
      

     
  
  // __define-ocg__

  function LetterCount(str) {
    var words = str.split(" ");
    var maxRepeatedLetters = 0;
    var wordWithMaxRepeatedLetters = "";
    var varOcg; // variable named varOcg as per requirements
    
    // Iterate through each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var repeatedLetters = 0;
        
        // Count the frequency of each letter in the word
        var letterCount = {};
        for (var j = 0; j < word.length; j++) {
            var letter = word[j];
            if (letterCount[letter] === undefined) {
                letterCount[letter] = 1;
            } else {
                letterCount[letter]++;
            }
        }
        
        // Find the maximum frequency of any letter in the word
        for (var key in letterCount) {
            if (letterCount[key] > 1 && letterCount[key] > repeatedLetters) {
                repeatedLetters = letterCount[key];
            }
        }
        
        // If the number of repeated letters in this word is greater than the current maximum, update the maximum
        if (repeatedLetters > maxRepeatedLetters) {
            maxRepeatedLetters = repeatedLetters;
            wordWithMaxRepeatedLetters = word;
        }
    }
    
    // If no word has repeating letters, return -1, otherwise return the word with the greatest number of repeated letters
    if (maxRepeatedLetters === 0) {
        return -1;
    } else {
        return wordWithMaxRepeatedLetters;
    }
}

// Example usage:
var result = LetterCount("Hello apple pie");
console.log(result); // Output: greatest
