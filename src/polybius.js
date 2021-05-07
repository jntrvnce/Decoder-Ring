// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    // hard code all the letters, create an object with the letters as keys and numbers as values.
    const poly = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
      " ": " "
    }
    // encoding the input, access each letter from the string with [i]
    // translate letter to corresponding number
    // loop through the input to access each letter
    let result = "";
    if (encode === true) {
    for (let i=0; i < input.length; i++) {
      let answer = input[i];
      let polySquare = poly[answer];
      console.log(answer, polySquare); //using poly to look up the letter pulled from the object
      result += polySquare;
      console.log(result);
    } 
    } else {
  // reverse what was done in the for loop, for decoding
    }
    return result;
    //if encode is true, run encoding. if encode is false, run decoding
   // console.log(poly);
  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
*/
const polybiusModule = (() => {
  const decodeKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  const encodeKey = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let split;
    let KEY = encodeKey;
    if (encode) {
      split = input.split("");
    } else {
      KEY = decodeKey;
      split = input.split(" ");
      const isOdd = split.reduce((acc, arr) => acc + arr.length, 0) % 2;
      if (isOdd) return false;
      split = split
        .map((section) => {
          return section.split("").reduce((acc, char, index, collection) => {
            if (char === " ") {
              acc.push(" ");
            } else if (!(index % 2)) {
              acc.push(char + collection[index + 1]);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b));
    }
    return split.map((char) => KEY[char] || " ").join("");
  }
  return { polybius };
})();
module.exports = { polybius: polybiusModule.polybius };