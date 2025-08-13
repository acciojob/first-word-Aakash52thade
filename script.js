function firstWord(s) {
  let word = s.trim(); // remove extra spaces
  if (word.length === 0) return ""; // empty string case
  return word.split(/\s+/)[0]; // split by spaces and return first word
}

const s = prompt("Enter String:");
alert(firstWord(s));
