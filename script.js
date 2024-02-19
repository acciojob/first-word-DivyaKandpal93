function firstWord(s) {
  // your code here
	if(s.trim() === '' || !s.includes(' ')){
		return s;
	}
	else {
		let result = s.split(' ');
		return result[0];
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
