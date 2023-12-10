// function reverseWords(inputString) {
//     let wordsArray = inputString.split(' ');
//     wordsArray.reverse();
//     let reversedWords = wordsArray.join(' ');
//     return reversedWords
// }
// console.log(reverseWords("Hello World"));
// ---------------------------------------------------------------------------------
// function countVowels(inputString) {
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let vowelsCount = 0;

//     inputString.split('').forEach(character => {
//         if (vowels.includes(character)) {
//             vowelsCount++;
//         }
//     });

//     return vowelsCount;
// }

// console.log(countVowels("Programming is Fun"));
//--------------------------------------------------------------------------------
// function findLargestNumber(numbersArray) {
//     let Max = 0;
//     numbersArray.filter(number => {
//         if (number > Max) {
//             Max = number
//         }
//     })
//     return Max
// }

// console.log(findLargestNumber([5, 12, 55, 9, 3, 21]));
//--------------------------------------------------------------------------------
// function isPalindrome(inputString) {

//     const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const stringedInput = cleanedString.split('');

//     const reversed = [...stringedInput].reverse();

//     return stringedInput.join('') === reversed.join('');
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama"));
//--------------------------------------------------------------------------------