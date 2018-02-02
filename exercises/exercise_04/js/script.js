/**********************************************

DART 450, Winter 2018
Exercise 04
Emma Spellacy

**********************************************/



$(document).ready(function () {

  $('.word').click(function(){
         console.log("click word");
         $('#sentenceBox').append($(this).text());
         
      });
/*$('.word').hover(function(){
  console.log("hover");
  $('.word').each(function(){
    $(this).css({"color":"red"});
  });
});
*/




});
