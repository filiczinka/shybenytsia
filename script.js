let userName = prompt('Enter your name!');
let msg = alert(`Hello ${userName}`);

let words = ['fish', 'dog', 'cow', 'cat', 'monkey', 'mouse', 'pig',
	'lion', 'bear', 'fox', 'giraffe', 'horse', 'elephant', 'deer', 'camel',
	'donkey', 'rabbit', 'dolphin', 'lemur', 'bison', 'koala', 'cobra', 'gorilla',
	'frog', 'turtle', 'tiger', 'antelope', 'duck', 'snake', 'flamingo', 'iguana',
	'kangaroo', 'wolf', 'hen', 'crocodile', 'panther'];
let randomWord = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < randomWord.length; i++) {
	answerArray[i] = ' _ ';
};
let tried = 0;
let remainingLetters = randomWord.length;

while (remainingLetters > 0) {
	alert('I have word:    ' + answerArray.join(''));

	let guess = prompt('Guess a letter, or click Cancel to stop playing.');
	if (guess === null) {
		break;
	} else if (guess.length < 1) {
		alert('Please enter a single letter.');
	} else {
		let correctGuess = false;
		for (let j = 0; j < randomWord.length; j++) {
			if (randomWord[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
				correctGuess = true;
			}
		}
		if (!correctGuess) {
			alert(`Sorry, the letter ${guess} is not in the word.`);
		} tried++;
	}
}
alert(`Have you tried: ${tried}`)
alert(`Good job! The answer was ${randomWord}!`);