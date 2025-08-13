
function firstWord(s) {
  // your code here
	
 let word = s.trim();
 if(s.length === "") return;
	return s.split(/\s+/)[0];
}

const s = prompt("Enter String:");
alert(firstWord(s));
