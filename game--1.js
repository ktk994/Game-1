var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " Harry-Potter quiz.");

// data of high score
var highScore = [
  { name : "Expert",
    score : 5
  }, 
  {
    name : "Intermediate",
    score : 4,  
  }
]

function play(question, answer) {
  var userAnwser = readlineSync.question(question);
  if ( userAnwser.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("You are right!");
    
  } else {
    console.log("You are wrong!");
  }
  console.log("Current score: ", score);
  console.log("===================");
}
var questions = [{
  question : "What was the name of Harry's aunt? ",
  answer :  "Petunia"
  } , { 
  question : "Who was the Headmaster of Hogwarts? ",
  answer : "Dumbledore"
  },{ 
  question : "Who wanted the Dark Arts Subject job ? ",
  answer : "Severus Snape"
  },
  { 
  question : "Who was Harry's godfather ? ",
  answer : "Sirius Black"
  },
   { 
  question : "What was Harry's pet? ",
  answer : "White Owl"
  }
  ];

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(userName + " : " + score);
console.log("Check Out the High-Scores ==>" + " Expert : " + highScore[0].score + " " + ", Intermediate : " + highScore[1].score);

if (score === highScore[0].score) {
  console.log("You are Expert");
} else if (score === highScore[1].score) {
  console.log("You are Intermediate");
}
  else { 
  console.log("You can improve")
}
