// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
  const caesarModule = (() => {
    const edges = {
      start: "a".charCodeAt(),
      end: "z".charCodeAt(),
    };
    function caesar(input, shift, encode = true) {
      if (!shift) return false;
      if (shift < -25 || shift > 25) return false;
      if (!encode) shift *= -1;
      input = input.toLowerCase();
      return input.split("").reduce((result, char) => {
        const code = char.charCodeAt();
        if (code < edges.start || code > edges.end) return result + char;
        let shifted = code + shift;
        if (shifted > edges.end) {
          shifted = edges.start + (shifted - edges.end - 1);
        } else if (shifted < edges.start) {
          shifted = edges.end - (edges.start - shifted - 1);
        }
        return result + String.fromCharCode(shifted);
      }, "");
    }
    return { caesar };
  })();

module.exports = { caesar: caesarModule.caesar };
