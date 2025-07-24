function firstWord(s) {
  // your code here
  let str = s.trim();
  let word = str.split(' ');
  console.log(word[0]);
}

const s = prompt("Enter String:");
alert(firstWord(s));
