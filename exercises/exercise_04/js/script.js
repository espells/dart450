/**********************************************

DART 450, Winter 2018
Exercise 04
Emma Spellacy

**********************************************/



$(document).ready(function () {

  $('.word').click(function(){
         console.log("click word");

         var $toAdd = $('<span class="' + $(this).attr('class') + '">' + $(this).text() + '</span>');
         $toAdd.removeClass('word');
         $('#sentenceBox').append($toAdd);

      });
/*$('.word').hover(function(){
  console.log("hover");
  $('.word').each(function(){
    $(this).css({"color":"red"});
  });
});
*/




});
