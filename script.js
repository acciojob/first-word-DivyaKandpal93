function firstWord(sentence) {
  // your code here
	 try {
        if (sentence.trim() === '') {
            return sentence;
        } else if (!sentence.includes(' ')) {
            return sentence;
        } else {
            const words = sentence.split(' ');
            return words[0];
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        // You can choose to return a default value or handle the error in any appropriate manner
        return null;
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
