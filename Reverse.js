const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
// Task 1: Take a sentence as input and reverse every word
rl.question("Enter a sentence: ", (inputSentence) => {
 const reversedSentence = reverseWordsInSentence(inputSentence);
 console.log("Reversed Sentence: " + reversedSentence);
 // Task 2: Perform sorting of an array in descending order
 const array = [5, 2, 9, 1, 5, 6];
 console.log("Original Array: " + array.toString());
 const sortedArray = array.sort((a, b) => b - a);
 console.log("Sorted Array in Descending Order: " + sortedArray.toString());
 rl.close();
});
// Function to reverse every word in a sentence
function reverseWordsInSentence(sentence) {
 const words = sentence.split(" ");
 let reversedSentence = "";
 for (const word of words) {
 const reversedWord = reverseWord(word);
 reversedSentence += reversedWord + " ";
 }
 return reversedSentence.trim();
}
// Function to reverse a single word
function reverseWord(word) {
 return word.split("").reverse().join("");
}