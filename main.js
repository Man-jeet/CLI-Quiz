var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = 
  {
    name: "Praveen",
    score: 3,
  }

// array of objects
var questions = [{
  question: "Who is the Father of our Nation? ",
  answer: "Mahatma Gandhi"
}, {
  question: "Who was the first President of India?",
  answer: "Dr. Rajendra Prasad"
},
{
  question: "Which is the most sensitive organ in our body?",
  answer: "Skin"
},
  {
  question: "Which is the heavier metal of these two? Gold or Silver?",
  answer: "Gold"
},
  {
  question: "Which is the longest river on the earth?",
  answer: "Nile"
}];

var username = readlineSync.question("What's your name? ");

function welcome() {   
  console.log("Welcome "+ username + " to General Knowledge Quiz?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
        
  } else {
    console.log("wrong!");
       
  }
  
  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Congratulations! You SCORED: ", score);
  
  if (score>=highScores.score){
    console.log(username,"Your Score is Greater than or equal ",highScores.name)
  }
  else{
    console.log(username,"Your Score is Less  Than ",highScores.name)
  }
}
  

welcome();
game();
showScores();
