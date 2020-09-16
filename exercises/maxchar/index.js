/* 
  --- Directions
    Given a string, return the character that is most
    commonly used in the string.
  --- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

function maxChar(str) {
  const uniqueCharacters = Array.from(new Set(str.split('')));
  const charMap = {character: null, quantity: 0};

  uniqueCharacters.forEach(character => {
    const re = new RegExp(character, 'g');
    const showQuantity = str.match(re).length;

    if (showQuantity > charMap.quantity) {
      charMap.character = character;
      charMap.quantity = showQuantity;
    }
  })

  return charMap.character;
}

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let character of str) {
//     if (charMap[character]) {
//       charMap[character]++;
//     } else {
//       charMap[character] = 1;
//     }
//   }

//   for (let character in charMap) {
//     if (charMap[character] > max) {
//       max = charMap[character];
//       maxChar = character;
//     }
//   }

//   return maxChar;
// }

module.exports = maxChar;
