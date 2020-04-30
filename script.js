var timer = document.getElementById('timer');
var intro = document.getElementById('intro');
var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var question = document.getElementById('question');
var answer = document.getElementById('answer');
var A = document.getElementById('A');
var B = document.getElementById('B');
var C = document.getElementById('C');
var D = document.getElementById('D');
var result = document.getElementById('result');
var score = document.getElementById('score');
var highscore = document.getElementById('highscore');
var finalscore = document.getElementById('finalscore');
var name = document.getElementById('name');

var questions = [
        {
            questionOption: "what does html stand for?",
            A: "hypotext markeup language",
            B: "hypertext markup language",
            C: "hightext makeup language",
            D: "hypnotic text marketing line",
            correct: "B"
        },
        {
            questionOption: "what does CSS stand for?",
            A: "cascading style sheet",
            B: "cool super style", 
            C: "coding style sheet",
            D: "crazy silly soup",
            correct: "A"
        },
        {
            questionOption: "what is the proper syntax to write a function named Apples?",
            A: "function = Apples",
            B: "function: Apples",
            C: "function Apples()", 
            D: "function Apples",
            correct: "C"
        },
        {
            questionOption: "which is considered a 'real programming language'?",
            A: "HTML",
            B: "CSS",
            C: "javascript",
            D: "APIs",
            correct: "C"
        },
        {
            questionOption: "How do you link html and javascript together?",
            A: "src= './script.js' ",
            B: "src= javascript",
            C: "javascript!",
            D: "js.script = src",
            correct: "A"
        },
]

startButton.addEventListener('click', startGame);

var timeLeft = 60;
var questionCounter = 0;
var lastQuestion = questions.length - 1;

function startGame(){
    intro.classList.add('hide')
    questionContainer.classList.remove('hide')
    var timerInterval = setInterval(
        function () {
            timeLeft--;
            timer.textContent = "Time Left: " + timeLeft;
            if (timeLeft === 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
}

showQuestions();

function showQuestions(){
    var ques = questions[questionCounter];
    question.textContent = ques.questionOption;
    A.textContent = ques.A;
    B.textContent = ques.B;
    C.textContent = ques.C;
    D.textContent = ques.D;
}

var score = 0;
function checkAnswer(answer){
    if(questions[questionCounter].correct == answer){
        score++;
        console.log ("correct");
        result.textContent = "correct!"
    }else{
        console.log("wrong");
        result.textContent = "wrong :/ "
        answerIsWrong();
    }
    if (questionCounter < lastQuestion){
        questionCounter++;
        showQuestions();
    }else{
        endQuiz();
    }
}

function answerIsWrong(){
    timeLeft -= 10;
    if (questionCounter > lastQuestion) {
        endQuiz();
    } 
    if (questionCounter < lastQuestion){
        questionCounter++;
        showQuestions();
    }
}
function endQuiz(){
    questionContainer.classList.add('hide')
    highscore.style.display = "block";
    finalscore.textContent = "Final score: " + timeLeft;
    console.log("you finished");
    localStorage.setItem("name",name.textContent);
    localStorage.setItem("highscore", score); 
}