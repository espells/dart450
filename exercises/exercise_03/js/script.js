/**********************************************

DART 450, Winter 2018
Exercise 03
Emma Spellacy

Description of what the script does...

**********************************************/
$(document).ready(function(){
/* pop-up message about story (brings up msg, makes it clickable, click makes message dissapear) */
  var delay = 10000;  
setTimeout(function () { 
  $('.message').text("Why are you reading this so slowly?");
 },delay);

$('.message').click(function(){
  $('.message').empty();
});

var delay = 20000;  
setTimeout(function () { 
$('.message2').text("Seriously, what's taking so long?");
 },delay);

$('.message2').click(function(){
$('.message2').empty();
});

var delay = 25000;  
setTimeout(function () { 
$('.message3').text("You dont like my Lego story?");
 },delay);

$('.message3').click(function(){
$('.message3').empty();
});

var delay = 30000;  
setTimeout(function () { 
$('.message4').text("Its based on a true story though...");
 },delay);

$('.message4').click(function(){
$('.message4').empty();
});
var delay = 35000;  
setTimeout(function () { 
$('.message5').text("Fine. I'll let you read. Go on.");
 },delay);

$('.message5').click(function(){
$('.message5').empty();
});
/* moves blocks up and down when clicking*/

  $('.div1').click(function(){

    $('.div1').animate({
      height: '50px'
    },5000);

    $('.div1').animate({
      height: '500px'
    },500);

  });

  $('.div2').click(function(){

    $('.div2').animate({
      height: '100px'
    },1000);

    $('.div2').animate({
      height: '600px'
    },300);

  });

  $('.div3').click(function(){

    $('.div3').animate({
      height: '50px'
    },500);

    $('.div3').animate({
      height: '425px'
    },500);

  });

  $('.div4').click(function(){

    $('.div4').animate({
      height: '10px'
    },500);

    $('.div4').animate({
      height: '800px'
    },500);

  });

  $('.div5').click(function(){

    $('.div5').animate({
      opacity: '0'
    },5000);

    $('.div5').animate({
      opacity: '100'
    });

  });














});
