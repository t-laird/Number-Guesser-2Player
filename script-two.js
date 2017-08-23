//Copy of script.js for use in 2 player number guesser

var answerBox1 = document.querySelector('.input-field1'); //Leave global
var answerBox2 = document.querySelector('.input-field2'); //Leave global


var guessButton1 = document.querySelector('.guess-button1'); //Leave global
var guessButton2 = document.querySelector('.guess-button2'); //Leave global

var number1 = document.querySelector('.number1'); //Make local - 2 functions addNumber and resetGame
var number2 = document.querySelector('.number2'); //Make local - 2 functions addNumber and resetGame

var clearButton1 = document.querySelector('.clear-input1'); //Leave global
var clearButton2 = document.querySelector('.clear-input2'); //Leave global


var min = document.querySelector('.input-min'); //Leave global
var max = document.querySelector('.input-max'); //Leave global

var highLow1 = document.querySelector('.highlow1'); //Make local - 2 functions highLow & resetGame
var highLow2 = document.querySelector('.highlow2'); //Make local - 2 functions highLow & resetGame


var resetButton = document.querySelector('.reset'); //Leave global

var playCounter = 0; //Leave global

var onlyOnce = 1; //Maybe local butOnlyOnce function

var storedRand; //Maybe local butOnlyOnce function

var minMaxError = document.querySelector('.minmaxerror'); //Maybe local minOrMaxErrror and enable guess input

var playCounter = 0;
var turnCounter = 0;


var crown1 = document.querySelector('.crown1');
var crown2 = document.querySelector('.crown2');

var loser1 = document.querySelector('.loser1');
var loser2 = document.querySelector('.loser2');

var turn1 = document.querySelector('.yourturn1');
var turn2 = document.querySelector('.yourturn2');



guessButton1.addEventListener('click', addNumber1);
guessButton2.addEventListener('click', addNumber2);
clearButton1.addEventListener('click',clearNumber1);
clearButton2.addEventListener('click',clearNumber2);


answerBox1.addEventListener('keyup', clearButtonEnable1);
answerBox2.addEventListener('keyup', clearButtonEnable2);

answerBox1.addEventListener('keyup', enableGuess1);
answerBox2.addEventListener('keyup', enableGuess2);

guessButton1.addEventListener('click',comparison1);
guessButton2.addEventListener('click',comparison2);

min.addEventListener('keyup',minOrMaxError);
max.addEventListener('keyup',minOrMaxError);

min.addEventListener('keyup',generateRand);
max.addEventListener('keyup',generateRand);

resetButton.addEventListener('click',resetGame);


function generateRand(){
	var minValue = parseInt(min.value);
	var maxValue = parseInt(max.value);
	var rand = (Math.floor((Math.random()*(maxValue - minValue + 1) + minValue )));
	console.log(rand);
	return rand;
}

function butOnlyOnce(){
	if (onlyOnce === 1){
		onlyOnce++;
		storedRand = generateRand();
		return storedRand;
	}else{
		return storedRand;
	}
}



function addNumber1(){
	var answer1 = parseInt(answerBox1.value);
	number1.innerText = answer1;
	return answer1;
}

function addNumber2(){
	var answer2 = parseInt(answerBox2.value);
	number2.innerText = answer2;
	return answer2;
}

function clearNumber1(){
	answerBox1.value = '';
	clearButton1.disabled = true;
	answerBox1.focus();
}

function clearNumber2(){
	answerBox2.value = '';
	clearButton2.disabled = true;
	answerBox2.focus();
}

//Enables the clear button after 
function clearButtonEnable1(){
	if (answerBox1.value !== ""){
	clearButton1.disabled = false;
	} else{
		clearButton1.disabled = true;
	}
}

function clearButtonEnable2(){
	if (answerBox2.value !== ""){
	clearButton2.disabled = false;
	} else{
		clearButton2.disabled = true;
	}
}

 function enableGuess1(){
	var minValue = parseInt(min.value);
	var maxValue = parseInt(max.value);

	if (answerBox1.value === "" || answerBox1.value < minValue || answerBox1.value > maxValue || isNaN(minValue) || isNaN(maxValue) || isNaN(parseInt(answerBox1.value)) || turnCounter === 1) {
		guessButton1.disabled = true;
	} else {
		guessButton1.disabled = false;
	}
} 

function enableGuess2(){
	var minValue = parseInt(min.value);
	var maxValue = parseInt(max.value);

	if (answerBox2.value === "" || answerBox2.value < minValue || answerBox2.value > maxValue || isNaN(minValue) || isNaN(maxValue) || isNaN(parseInt(answerBox2.value)) || turnCounter === 0) {
		guessButton2.disabled = true;
	} else {
		guessButton2.disabled = false;
	}
}

function comparison1(){
	var userGuess = addNumber1();
	var minimum = parseInt(min.value);
	var maximum = parseInt(max.value);
	var randomNum = butOnlyOnce();
	
	

	console.log(userGuess);
	if (isNaN(userGuess)){
		highLow1.innerText = "Error... Please make sure you enter a number.";
	}else if(userGuess > maximum || userGuess < minimum){
		highLow1.innerText = "Please enter a value between " + min.value + " and " + max.value;
	}else if (userGuess > randomNum){
		highLow1.innerText = "That is too high!";
		turn2.innerText = "Your turn!";
		turn1.innerText = "";
		answerBox2.focus();

	}else if (randomNum > userGuess){
		highLow1.innerText = "That is too low!";
		turn2.innerText = "Your turn!";
		turn1.innerText = "";
		answerBox2.focus();
	}else{
		highLow1.innerText = "You win!";
		highLow2.innerText = "You lose!";
		answerBox1.disabled = true;
		answerBox2.disabled = true;
		crown1.hidden = false;
		loser2.hidden = false;
		turn2.innerText = "";
		turn1.innerText = "";
		resetButton.focus();
	}
	disableMinMax();
	turnCounter++;
	playCounter++;
	enableReset();
	guessReset1();
	enableGuess1();
	clearNumber1();
}

function comparison2(){
	var userGuess = addNumber2();
	var minimum = parseInt(min.value);
	var maximum = parseInt(max.value);
	var randomNum = butOnlyOnce();
	
	

	console.log(userGuess);
	if (isNaN(userGuess)){
		highLow2.innerText = "Error... Please make sure you enter a number.";
	}else if(userGuess > maximum || userGuess < minimum){
		highLow2.innerText = "Please enter a value between " + min.value + " and " + max.value;
	}else if (userGuess > randomNum){
		highLow2.innerText = "That is too high!";
		turn1.innerText = "Your turn!";
		turn2.innerText = "";
		answerBox1.focus();
	}else if (randomNum > userGuess){
		highLow2.innerText = "That is too low!";
		turn1.innerText = "Your turn!";
		turn2.innerText = "";
		answerBox1.focus();
	}else{
		highLow2.innerText = "You win!";
		highLow1.innerText = "You lose!";
		answerBox2.disabled = true;
		answerBox1.disabled = true;
		crown2.hidden = false;
		loser1.hidden = false;
		turn1.innerText = "";
		turn2.innerText = "";
		resetButton.focus();
	}
	disableMinMax();
	turnCounter--
	enableReset();
	guessReset2();
	enableGuess2();
	clearNumber2();
}

function enableReset(){
	if (playCounter === 0){
		resetButton.disabled = true;
	}else{
		resetButton.disabled = false;
	}
}

function guessReset1(){
	answerBox1.value = "";
}

function guessReset2(){
	answerBox2.value = "";
}

function minOrMaxError(){
	var minValue = parseInt(min.value);
	var maxValue = parseInt(max.value);
	if (minValue > maxValue || isNaN(minValue) || isNaN(maxValue)){
		minMaxError.innerText = "Make sure your min is bigger than your max and that you are inputting numbers!";
		minMaxError.hidden = false;
	}
	else{
		minMaxError.hidden = true;
	}
}

function disableMinMax(){
		min.disabled=true;
		max.disabled=true;
}

function resetGame(){
	var minValue = parseInt(min.value);
	var maxValue = parseInt(max.value);
	playCounter = 0;
	turnCounter = 0;
	onlyOnce = 1;
	butOnlyOnce();
	number1.innerText = "#";
	number2.innerText = "#";
	highLow1.innerText = "After your first guess check here for a hint!"
	highLow2.innerText = "After your first guess check here for a hint!"
	min.disabled = false;
	max.disabled = false;
	answerBox1.disabled = false;
	answerBox2.disabled = false;
	resetButton.disabled = true;
	crown1.hidden = true;
	crown2.hidden = true;
	loser1.hidden = true;
	loser2.hidden = true;
	turn1.innerText = "Your turn!";
	answerBox1.focus();
}
