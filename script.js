var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var instructions = document.getElementById('instructions');
var answerButton = document.getElementById('answer-btn');
var answerOne = document.getElementById('answerOne');
var answerTwo = document.getElementById('answerTwo');
var answerThree = document.getElementById('answerThree');
var answerFour = document.getElementById('answerFour');
var scoreDiv = document.getElementById("scoreDiv");
var scoreDisplay = document.getElementById("score");
var scoreTitle = document.getElementById("scoreTitle");
var highscores = document.getElementById("highscores");
var scoreBoard = document.getElementById('scoreBoard');
var quizTime= 60;
var questionCounter = 0;
var score = 0;

var questions = [
    {
        questionOption: "what does html stand for?",
        options: ["hypotext markeup language", "hypertext markup language", "hightext makeup language", "hypnotic text marketing line"],
        answer: "hypertext markup language",
    },
    {
        questionOption: "what does CSS stand for?",
        options: ["cascading style sheet", "cool super style", "coding style sheet", "crazy silly soup"],
        answer: "cascading style sheet",
    },
    {
        questionOption: "what is the proper syntax to write a function named Apples?",
        options: ["function = Apples", "function: Apples", "function Apples()", "function Apples"],
        answer: "function Apples()",
    }

];

startButton.addEventListener('click', startGame)

var timeElement = document.querySelector(".time");
var secondsLeft = 60;

function startGame(){
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    instructions.classList.add('hide')
    var timerInterval = setInterval(
        function () {
            secondsLeft--;
            timeElement.textContent = "Time Left: " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
        showQuestion()
}

function showQuestion() {
  
    document.getElementById("question").textContent = questions[questionCounter].questionOption;
    document.getElementById("answerOne").textContent = questions[questionCounter].options[0];
    document.getElementById("answerTwo").textContent = questions[questionCounter].options[1];
    document.getElementById("answerThree").textContent = questions[questionCounter].options[2];
    document.getElementById("answerFour").textContent = questions[questionCounter].options[3];

answerButton.addEventListener('click', nextQuestion)
}

function nextQuestion(){
    answerTwo.addEventListener('click', function () {

         if (questionCounter == 0) {
            score++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            showQuestion();
        } else {
            secondsLeft-= 10;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            showQuestion();
        }
    })
    answerOne.addEventListener('click', function () {
       
        if (questionCounter == 1) {
            score++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            showQuestion();
        } else {
            secondsLeft-= 10;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            showQuestion();
        }
    })
    answerThree.addEventListener('click', function () {
      
        if (questionCounter == 2) {
            score++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            showQuestion();
        } else {
            secondsLeft-=10;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            showQuestion();
        }
    })
}