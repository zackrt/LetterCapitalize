//https://repl.it/@ZackToth/capitalize-all-words

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

// Use the Parameter Testing feature in the box below to test your code with different arguments

function LetterCapitalize(str) { 
  //convert to an array and then split at the blank space
  var arr = str.split(" ");
  // create for loop to interate through array = str
  for (var i = 0; i < arr.length; i++) {
    //.slice appends the remaining characters in the word
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
   
// keep this function call here 
console.log(LetterCapitalize("hello world"))
console.log(LetterCapitalize("i ran there"))