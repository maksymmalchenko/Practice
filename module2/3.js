const findLongestWord = (string) => {
  
  const splitedWords = string.split(' ');
  
  let longestWord = splitedWords[0];
  for (i = 1; i < splitedWords.length; i += 1){
    if (longestWord.length < splitedWords[i].length) {
      longestWord = splitedWords[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'