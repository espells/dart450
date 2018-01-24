/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function(){
$('.shape1').hide();
$('.shape2').hide();
$('.shape3').hide();

  // Insert jQuery code here to run when the page is loaded
     $('#shape').click(function(){
       console.log("click");
       $('#shape').animate({
          height:'450px'
        },1000);
    });

    $('.regular_fact').click(function() {
      console.log("click");

      $('.shape1').slideDown(500,"swing");
    });

    $('.shape1').click(function() {
      console.log("click");

      $('.shape2').slideDown(500,"swing");
    });
    $('.shape2').click(function() {
      console.log("click");

      $('.shape3').slideDown(500,"swing");
    });



});
