console.log("   THE QUIZ   ");
console.log("QUIZ is TWO Rounds");
console.log("Each round 3 Questions");
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ")
console.log("WELCOME TO THE QUIZ  "+userName+"!");
console.log("Note:- Correct Answer : +1,Wrong Answer : -1 ");
var score = 0;
function quiz(question, answer){
var userAnswer = readlineSync.question(question);

if (userAnswer.toUpperCase() === answer.toUpperCase()) {
console.log("correct! ");
score  ++;
}
else{
console.log("wrong! ");
score --;
}
console.log("your score is ",score);
console.log("----------------------");}

console.log("   ROUND 1   ")
var questions = [
  {
    question:"who invented Telephone? ",
    answer:"Grahambell"
   },



{
    question:"Who is the number one richest person? ",
    answer:"Jeff Bezos"
   },
   {
     question:"What is the capital of Tripura? ",
     answer:"Agartala"
   },

  
];
for(var i=0; i<questions.length; i++){
var currentq = questions[i];
quiz(currentq.question, currentq.answer);
}
console.log("----------------------");
console.log(   "ROUND 2"   )
var questions = [
  {
    question:"Who is the CEO of facebook?  ",
    answer:"MARK ZUCKENBURG"
    },
  {
    question:"Owner of Microsoft? ",
    answer: "Bill Gates"
  },
  {
    question:"Who is the CM of AP? ",
    answer:"jagan"
  },
];
for(var i=0; i<questions.length; i++){
var currentq = questions[i];
quiz(currentq.question, currentq.answer);
}
console.log("YOUR FINAL SCORE is " + score);