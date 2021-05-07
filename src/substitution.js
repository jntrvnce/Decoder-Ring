// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// 1. input refers to the inputted text to be encoded or decoded.
// 2. alphabet refers to substitution alphabet.
// 3. encode refers to whether you should encode or decode the message. By default it is set to true.

// When building the function, keep the following constraints and rules in mind:

// 1. The input could include spaces and letters as well as special characters such as #, $, *, etc.
// 2. Spaces should be maintained throughout.
// 3. Capital letters can be ignored.
// 4. The alphabet parameter must be a string of exactly 26 characters, which could include special characters 
// such as #, $, *, etc. Otherwise, it should return false.

// 5. All the characters in the alphabet parameter must be unique. Otherwise, it should return false.

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const abc = "abcdefghijklmnopqrstuvwxyz"; // option 1.
  const abcArr = [
    "a","b","c","d","e","f","g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p","q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
  ]; // option 2.
  function uniqueChar(input){
    const object = input.split("").reduce((acc, char) => {
      acc[char] = true;
      return acc;
    }, {});
    return Object.keys(object).length === input.length;
  }
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // option 1. 
    // if(!alphabet || alphabet.length !== 26 ) return false;
    // if(!uniqueChar(alphabet)) return false;
    // const [top, bottom] = encode
    //   ? [abc, alphabet]
    //   : [alphabet, abc];
    // const key = top.split("").reduce(
    //   (acc, letter, index) => {
    //     acc[letter] = bottom[index];
    //     return acc;
    //   },
    //   { " ": " " }
    // );
    // return input
    //   .toLowerCase()
    //   .split("")
    //   .map((letter) => key[letter])
    //   .join("");

    // option 2.
    if(!alphabet) return false;
    alphabet = alphabet.split(''); // divides alphabet into list of substrings
    if(alphabet.length !== 26 || (new Set(alphabet)).size !== alphabet.length) return false; // alphabet is not equal to 26 or new element is not equal to abc length, return false 
    //OR if(!input || !alphabet || alphabet.length !== 26) return false ******

    input = input.toLowerCase().split('');
    return (encode) ? input.reduce((acc, character) => {
      if(character === " ") {
        acc.push(character);
      }
      let index = abcArr.indexOf(character);
      acc.push(alphabet[index]);
      return acc;
    }, []).join("") : 
    input.reduce((acc, character) => {
      if(character === " ") {
        acc.push(character);
      }
      let index = alphabet.indexOf(character);
      acc.push(abcArr[index]);
      return acc; 
    },[]).join("");

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
