
function firstWord(s) {
  // your code here
 
 str = str.trim();
 
 if(str === '') return '';
 
 let spaceIndex = str.indexOf(' ');
 
 is(spaceIndex === -1){
     return str;
 }
 
 return str.substring(0, spaceIndex);
 
}

const s = prompt("Enter String:");
alert(firstWord(s));
