/*

Blast.js ex06
Emma Spellacy


*/

$(document).ready(function() {

$("#question").blast({
  delimiter: "character",
  customClass: "questionChar",
  generateIndexID: true
})

$("#answer").blast({
  delimiter: "character",
  customClass: "answerChar",
  generateIndexID: true
})

$(".blast").hide();

$('#question').show();
$('#answer').show();

var currentQuestionChar = 0;

setTimeout(function(){

    setInterval(function(){
      $("#questionChar-" + currentQuestionChar).show();
      currentQuestionChar++;
    },60)

},300);

var currentAnswerChar = 0;

setTimeout(function(){

    setInterval(function(){
      $("#answerChar-" + currentAnswerChar).show();
      currentAnswerChar++;
    },60)

},1500);

});
