// write a function that confirms or denies whether 
// a lowercase string word 
// is the same backwards and forwards.




function isPalindrome(word) {
  let wordArray = word.split('');
  let backwardsArray = wordArray.reverse();
  let newWord = backwardsArray.join('');
 
  if (word === newWord) {
    return true
  }
  else {
    return false
  }
}


isPalindrome("disgusting")
/* 
  1.split the string into an array of letters
  2. reverse()
  3. join()
  4. if (word = newWord)
  return true
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"))

}

module.exports = isPalindrome;
