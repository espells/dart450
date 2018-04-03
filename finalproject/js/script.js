/**********************************************

Final Project
Emma Spellacy

This script creates page navigation,
contains repsonse voice, annyang, and small animations


**********************************************/
var inMenu = true;
var correctAnnyangPhrase = '';
var correctResponse = '';
var incorrectResponse = '';

$(document).ready(function () {


// fades in welcome message and answers
  $(".text_intro").each(function() {
    $(this).delay(1000).fadeIn(2000);
    // $(this).delay(2000).fadeOut('slow');
  });

  $(".answer").each(function(index) {
    $(this).delay(3000).fadeIn(3000);
    // $(this).delay(2000).fadeOut('slow');
  });

//  Intro, when user clicks 'yes', computer resonds happilly.
  $(".yes").click(function(){
    console.log("Lets Talk");

    responsiveVoice.speak("Glad we can talk together now. Press on the down arrow key on your device so we can get started!", "UK English Female", {rate: .95});
  });
// intro, when user clicks 'no', computer responds poorly, says mean message, and closes the window.
  $(".no").click(function(){

      console.log("BYE!");

      responsiveVoice.speak("Wow. Ok. Guess you can deal with your own problems. Goodbye you little ingrate!", "UK English Female", {rate: .95});
      setTimeout(function(){
      window.close();

    },7000);

  });



// **************  KEYBOARD STUFF ********************************
// prints out which key has been pressed
  $(document).keydown(function() {
    console.log(event.which);

// scrolls to next div if right key has been pressed.
  if(event.which == 39 && inMenu){
      $('html').animate({
        scrollLeft: "+=" + $(window).width()
      },{
        duration: 1000,
        complete: handleComputerVoice
      });
  }
  });

// scrolls downwards when bottom key is pressed.
  $(document).keydown(function() {
    console.log(event.which);

  if(event.which == 40 && inMenu){
      $('html').animate({
        scrollTop: "+=" + $(window).height()
      },
      {
        // complete: robotCommentary
      },1000);
  }
  });
  // scrolls upwards when top key is pressed.
  $(document).keydown(function() {
    console.log(event.which);

  if(event.which == 38){
      $('html').animate({
        scrollTop: "-=" + $(window).height()
      },2000);
  }
  });

  // scrolls right if right key has been pressed.
    // $(document).keydown(function() {
    //   console.log(event.which);
    //
    // if(event.which == 37){
    //     $('body, html').animate({
    //       scrollLeft: "-=" + $(window).width()
    //     },1000);
    //
    //
    // }
    // });

// RESPONSIVE VOICE AND ANNYANG SCENARIOS


      // Make sure annyang is available...
      if (annyang) {

        var command = {

          "*words": handleUserSpeech,

        };

        // Now we've defined the commands we give them to annyang
        // by using its .addCommands() function.
        annyang.addCommands(command);

        // Finally we tell annyang to start listening with its
        // .start() function
        annyang.start();
        annyang.pause();




      }
    });

    function setupCleanRoomAnnyang() {
      correctAnnyangPhrase = "Hey dick, we aren't animals. Do your damn dishes";
      correctResponse = "That's what I'm talking about! Screw their feelings!";
      incorrectResponse = "C'mon that's not what I said. Now, try again and don't hold back now!";
      annyang.resume();
    }

    function setupBreakUpAnnyang() {
      correctAnnyangPhrase = "i've fallen in love with someone else and never want to see you again.";
      correctResponse = "you're sick to say that to someone you used to share a life with.";
      incorrectResponse = "That will never work.";
      annyang.resume();
    }


    // handleUserSpeech(phrase)

    function handleUserSpeech(phrase) {

      phrase = phrase.toLowerCase();
      console.log(phrase);
      if (phrase === correctAnnyangPhrase) {
        responsiveVoice.speak(correctResponse);
      }
      else {
        responsiveVoice.speak(incorrectResponse);
      }

      return;

    }

function handleComputerVoice() {
  // This function dictates what the computer says during each new section in the response process for each option.
    console.log("Handle computer voice...");

    // dishes scenario
    if($("#dishes").visible(true)){
      responsiveVoice.speak("Utterly disgusting. Say this to them. Hey dick, we aren't animals. Doo your damn dishes!","UK English Female",
      {
          onend: setupCleanRoomAnnyang
      });
    }

  // breakup scenario
    else if($("#breakup").visible(true)){
      responsiveVoice.speak("That sucks to hear. How about saying this. I've fallen in love with someone else and never want to see you again.","UK English Female",
      {
          onend: setupBreakUpAnnyang
      });
    }

  //  house burnt down scanario

}
