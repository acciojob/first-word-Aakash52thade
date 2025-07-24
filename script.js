
function firstWord(s) {
  // your code here
 
 str = str.trim();
 
 if(str === '') return '';
 
 let spaceIndex = str.indexOf(' ');
 
 if(spaceIndex === -1){
     return str;
 }
 
 return str.slice(0, spaceIndex);
 
}

const s = prompt("Enter String:");
alert(firstWord(s));
