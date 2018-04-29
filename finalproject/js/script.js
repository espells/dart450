/**********************************************

Final Project
Emma Spellacy
April 29th 2018

This script contains repsonse voice, annyang, and small animations

**********************************************/

// Varaibles for the current convo, the "next" convo(part2) and the strings for the conversations incuding the computers initial response, the correct annyang phrase, and the phrases the computer responds with
var inMenu = true;
var voiceType = "UK English Female";
var currentConversation = null;
var nextConversation = null;
// objects for each "scenario"
var conversations = {
  dishes: {
    part1: {
      initialResponse: "Oh my god that is so gross. Tell them to do their damn dishes!",
      correctAnnyangPhrase: "do your damn dishes",
      correctResponse: "That's what I'm talking about! Screw their feelings!",
      incorrectResponse: "That's not what I said. Now, try again and don't hold back! Remeber, just repeat what I said."
    },
    part2: {
      initialResponse: "Okay, now that you're all warmed up, how about you say this. Grab the sponge and wash!",
      correctAnnyangPhrase: "grab the sponge and wash",
      correctResponse: "Wow, you seem to be way meaner then when we first met. I think my job is finished. Go an tell them in person what you have said to me.",
      incorrectResponse: "It's ok to be mean. Remember that time they didn't wash them for a week? Now do what I said."
    }
  },
  breakup: {
    part1: {
      initialResponse: "That sucks to hear. There is no way this will be easy. How about saying this. I am in love with someone else.",
      correctAnnyangPhrase: "i am in love with someone else",
      correctResponse: "you're sick to say that to someone you used to share a life with. But I like it. ",
      incorrectResponse: "That will never work. Now say what I told you to say."
    },
    part2: {
      initialResponse: "Now, let us really let them know we are serious. Say we need to break up. And with some emotion.",
      correctAnnyangPhrase: "we need to break up",
      correctResponse: "Wow, I think I may actually start crying myself and i'm not even your partner. Go on now and rip off the bandaid in real life.",
      incorrectResponse: "I said with emotion. I thought I was the computer not you!"
    }
  },
  burntHouse: {
    part1: {
      initialResponse: "Wow. I don't even know how you managed this one. But anyways, how about you apologize by saying that you are sorry you burnt the house down. ",
      correctAnnyangPhrase: "i am sorry i burnt the house down",
      correctResponse: "That's all you have to say? That you're sorry? Where are they going to live?",
      incorrectResponse: "Is that the best you can do?"
    },
    part2: {
      initialResponse: "C'mon now. They have no house. Say I beg of you to forgive me. ",
      correctAnnyangPhrase: "i beg of you to forgive me",
      correctResponse: " Well well well. I guess you're sorry after all. Be prepared that if this did happen in real life, your parents may not be as forgiving as I am. Best of luck!",
      incorrectResponse: " I said beg, goddamn it! now get on your knees and do what I said!"
    }
  }
}

// homepage phrase
var openingPhrase = "Glad we can talk together now. Let me show you some topics we can go over.";


$(document).ready(function () {
  $(".intro").fadeIn(1000);
  //  Intro, when user clicks "yes", computer resonds happilly. This fades in the initial welcome message, fades it out when you click yes, and then fades in the new convo options
  $(".yes").click(function() {
    speak( openingPhrase, function() {
      $(".intro").fadeOut(function() {
        $(".conversations").fadeIn();
      })
    });
  });

  // intro, when user clicks "no", computer responds poorly, says mean message, and closes the window.
  $(".no").click(function() {
    speak("Wow. Ok. Guess you can deal with your own problems. Goodbye you little ingrate!", window.close);
  });

  // RESPONSIVE VOICE AND ANNYANG SCENARIOS
  var command = {
    "*words": handleUserSpeech,
  };

  // Now we"ve defined the commands we give them to annyang
  // by using its .addCommands() function.
  annyang.addCommands(command);

  // Finally we tell annyang to start listening with its
  annyang.start();
  annyang.pause();
});

// newly revised handleUserSpeech function: same functionally, if the correct annyyang phrase is said the correct scenario chosen, the computer will call the "next" conversation and then make it null.
//  speakAndListen then passes the initial response of the next convo
// if no "next" convo, user is returned to homepage
function handleUserSpeech(phrase) {
  var phrase = phrase.toLowerCase();
  if (phrase === currentConversation.correctAnnyangPhrase) {
    speak(currentConversation.correctResponse, function() {
      if (nextConversation) {
        currentConversation = nextConversation;
        nextConversation = null;
        speakAndListen(currentConversation.initialResponse);
      } else {
        $(".loader").fadeOut(1000);
        returnToMenu();
      }
    });
  } else {
    speak(currentConversation.incorrectResponse);
  }
}


// Function: How the conversations are defined.
// defines part 1 as current and part 2 as next. When convo starts, the loader symbol appears, showing the computer is "thinking"
function setupConversation(conversation) {
  currentConversation = conversation.part1;
  nextConversation = conversation.part2;
  $(".conversations").fadeOut(function() {
    $(".loader").fadeIn();
    speakAndListen(currentConversation.initialResponse);
  })
}

// Function: How the computer speaks- passes the onend function, defined above in handleUserSpeech. If that function goes through, it will say designated phrase, with defined voiceType.
function speak(phrase, onEnd) {
  if (onEnd) {
    responsiveVoice.speak(phrase, voiceType, { onend: onEnd });
  } else {
    responsiveVoice.speak(phrase, voiceType);
  }
}

// Function: Annyang resumes and user can speak.
function speakAndListen(phrase) {
  speak(phrase);
  annyang.resume();
}

// Function: Reloads to the homepage.
function returnToMenu() {
  window.location.reload(true)
}
