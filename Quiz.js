const Question = [
	{
		Ques: "Which Is Not a Programming Language ??",
		a: "JAVA",
		b: "RUST",
		c: "CSS",
		d: "GO LANG",
		correct: "c",
	},
	{
		Ques: "Select Odd One Out ??",
		a: "Array",
		b: "stack",
		c: "Tree",
		d: "LinkedList",
		correct: "c",
	},
	{
		Ques: "Father Of Python Language ??",
		a: "Bjarne Stroustrup",
		b: "Rasmus Lerdorf",
		c: "Brendan Eich",
		d: "Guido van Rossum",
		correct: "d",
	},
	{
		Ques: "Which is Not a MarkUp Language ??",
		a: "XML",
		b: "PERL",
		c: "HTML",
		d: "SGML",
		correct: "b",
	},
	{
		Ques: "Old Name of Java is ??",
		a: "Oak",
		b: "palm",
		c: "Ecma",
		d: "Ruby",
		correct: "a",
	},
	{
		Ques: "What is the full form of CSS?",
		a: "Color style sheet",
		b: "Cascading style sheet",
		c: "Concatenated style sheet",
		d: "Creative style sheet",
		correct: "b",
	},
	{
		Ques: "How many heading tags are there in HTML5 ??",
		a: "2",
		b: "6",
		c: "5",
		d: "7",
		correct: "b",
	},
	{
		Ques: "Best Case Complexity of Bubble Sort is ??",
		a: "O(N^2)",
		b: "O(N * Log(N))",
		c: "O(Log (N))",
		d: "O(N)",
		correct: "d",
	},
	{
		Ques: "Which of the following HTML element is used for creating an unordered list?",
		a: "ul",
		b: "ol",
		c: "em",
		d: "td",
		correct: "a",
	},

	{
		Ques: "Rahul's Favourite Language is ",
		a: "Python",
		b: "Java",
		c: "C++",
		d: "Go Lang",
		correct: "b",
	},
];

let len = Question.length;
let index = 0;
let totalScore = 0;
let right = 0,
	wrong = 0,
	Unattempted = 0;
// Selecting All the options using Query Selectors
const optionInputs = document.querySelectorAll(".optionBtn");

const LoadQuestion = () => {
	if (index == len) {
		console.log(totalScore);
		return endQuiz();
	} else {
		Reset();
		// Collecting Data From the Array of Objects
		const Data = Question[index];

		// Changing the Question Number
		const Q_num = document.getElementById("Q_num");
		Q_num.innerHTML = `Question ${index + 1} / 10`;

		// Changing the Question
		const quesText = document.getElementById("quesText");
		quesText.innerHTML = Data.Ques;

		// Changing the Options
		// A :
		document.querySelectorAll(".optionBtn")[0].nextElementSibling.innerHTML =
			Data.a;
		// B :
		document.querySelectorAll(".optionBtn")[1].nextElementSibling.innerHTML =
			Data.b;
		// C :
		document.querySelectorAll(".optionBtn")[2].nextElementSibling.innerHTML =
			Data.c;
		//  D:
		document.querySelectorAll(".optionBtn")[3].nextElementSibling.innerHTML =
			Data.d;
	}
};

/*
Evaluating the answer of the User , with the help of getAnswer() function
if returned value of getAnswer() matches with correct value (object ) then it will 
increment the score otherwise nothing will change
*/
const submitAns = () => {
	playClickSound();
	const Data = Question[index];

	const answer = getAnswer();
	if (answer == undefined) Unattempted++;
	else if (answer == Data.correct) {
		totalScore += 1;
		right++;
	} else {
		wrong++;
	}
	index++;
	LoadQuestion();
};

/*
Iterating Over the optionInputs Node List  Using For Each Loop and 
finding the option which is selected By the user . 
.checked is an attribute .it will true only for the checked value otherwise false
when we find the option selected ,
we return it to the submitAns function
 */
const getAnswer = () => {
	let tempAns;
	optionInputs.forEach((input) => {
		if (input.checked) {
			tempAns = input.value;
		}
	});
	return tempAns;
};

// Reset Function()

const Reset = () => {
	optionInputs.forEach((input) => {
		input.checked = false;
	});
};

const playClickSound = () => {};

/*
This Function is Called When THere are No Questions Available
This Creates an Output Window where result will be display
totalScore 
Right ans
Wrong ans 
etc
*/
const endQuiz = () => {
	document.getElementsByClassName("container")[0].style.display = "none";
	document.getElementsByClassName("afterContainer")[0].style.display = "flex";
	document.getElementById("g").innerHTML = `✅ Right Answers  :  ${right}`;
	document.getElementById("r").innerHTML = `❌ Wrong Answers  :  ${wrong}`;
	document.getElementById(
		"a"
	).innerHTML = `⚠️ Unattempted    :  ${Unattempted}`;
	document.getElementById("t").innerHTML = ` Total Score  ${totalScore} `;
};

LoadQuestion();
