function firstWord(sentence) {
    const trimmedSentence = sentence.trim();
    if (trimmedSentence === '' || !trimmedSentence.includes(' ')) {
        return trimmedSentence;
    } else {
        const words = trimmedSentence.split(' ');
        return words[0];
    }
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
