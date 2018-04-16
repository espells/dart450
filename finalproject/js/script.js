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
      correctAnnyangPhrase = "do your damn dishes";
      correctResponse = "That's what I'm talking about! Screw their feelings!";
      incorrectResponse = "That's not what I said. Now, try again and don't hold back!";
      annyang.resume();
    }

    function setupCleanRoomAnnyang2(){
      correctAnnyangPhrase = "you are so gross";
      correctResponse = "Wow you seem to be way meaner then when we first met. I think my job is finished. Go an tell them in person what you  have said to me.";
      incorrectResponse = "It's ok to be mean. Remember that time they didn't wash them for a weak?";
      annyang.resume();
    }

    function setupBreakUpAnnyang(showNextButton) {
      correctAnnyangPhrase = "yes";
      correctResponse = "you're sick to say that to someone you used to share a life with. But I like it";
      incorrectResponse = "That will never work. Now say what I told you to say.";
      annyang.resume();
    }

    function setupBreakUpAnnyang2(){
      correctAnnyangPhrase = "we need to break up";
      correctResponse = " Wow, I think I may actually start crying myself and i'm not even your partner. Go on now and rip off the bandaid in real life.";
      incorrectResponse = " I said with emotion. I thought I was the computer not you!";
      annyang.resume();
    }

    function setupHouseFireAnnyang(){
      correctAnnyangPhrase = "i am so sorry i burnt the house down";
      correctResponse = " That's all you have to say? That you're sorry?";
      incorrectResponse = " Is that the best you can do?";
      annyang.resume();
    }

    function setupHouseFireAnnyang2(){
      correctAnnyangPhrase = "i beg of you to forgive me";
      correctResponse = " Well well well. I guess you're sorry after all. Be prepared that if this did happen in real life, your parents may not be as forgiving as I am. Best of luck!";
      incorrectResponse = " I said beg, goddamn it! now get on your knees and do what I said!";
      annyang.resume();
    }

    function showNextButton(){
        $(".next").show();
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
      responsiveVoice.speak("Utterly disgusting. Tell them to Doo their damn dishes!","UK English Female",
      {
          onend: setupCleanRoomAnnyang,showNextButton

      });
    }

    else if($("#dishes2").visible(true)){
      responsiveVoice.speak(" Now you're all warmed up. If you really want to let them hear it say this. You are so gross.","UK English Female",
      {
          onend: setupCleanRoomAnnyang2
      });
    }


  // breakup scenario
    else if($("#breakup").visible(true)){
      responsiveVoice.speak("That sucks to hear. How about saying this. I am in love with someone else.","UK English Female",
      {
          onend: setupBreakUpAnnyang
      });

    }

    else if($("#breakup2").visible(true)){
      responsiveVoice.speak("Time for the hard part. Repeat after me, and with some emotion this time: We need to breakup","UK English Female",
      {
          onend: setupBreakUpAnnyang2
      });

    }

    else if($("#burntHouse").visible(true)){
      responsiveVoice.speak(" I don't even know how the hell you did that! apologize for your stupidity. Repeat after me. i am so sorry i burnt the house down.", "UK English Female",
      {
        onend: setupHouseFireAnnyang
      });
    }

    else if($("#burntHouse2").visible(true)){
      responsiveVoice.speak("If you are really sorry you should beg for forgiveness. Say this: I beg of you to forgive me!", "UK English Female",
      {
        onend: setupHouseFireAnnyang2
      });
    }

  //  house burnt down scanario

}
