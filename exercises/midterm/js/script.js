/* button clicks, creates pop-up message, and then opens separate window */
$(document).ready(function () {

$(".badbutton.1").click(function(){
  console.log("click word");
  window.alert("Stir the pot and start some facebook gossip!");
  window.open('https://www.facebook.com/','pop-up','width=650,height=500,left=400,top=200');

});

$(".badbutton.2").click(function(){
  console.log("click word");
  window.alert("Even thought you're in Canada, you can still support a dumb cause! Afterall we are America's hat!");
  window.open('https://donate.nra.org/donate','pop-up','width=650,height=500,left=400,top=200');

});
$(".badbutton.3").click(function(){
  console.log("click word");
  window.alert("Honestley who even cares about the world anyways?? Press that button a say goodbye to to it all!");
  window.open('https://edge.alluremedia.com.au/m/l/2017/09/Nukesds2.jpg','pop-up','width=650,height=500,left=400,top=200');

});

$(".badbutton.4").click(function(){
  console.log("click word");
  window.alert("Getting glitter all over is the worst. So treat your enemies to just that!");
  window.open('https://www.ruindays.com/','pop-up','width=650,height=500,left=400,top=200');

});

$(".badbutton.5").click(function(){
  console.log("click word");
  window.alert("Design a disease a see how fast the world crumbles under contagion!");
  window.open('http://pandemic3.com/','pop-up','width=650,height=400,left=400,top=200');

});

$(".badbutton.6").click(function(){
  console.log("click word");
  window.alert("Keep it simple! Become a troll and ruin someone's life for no reason besides the fact that you are feeling like a trash person!");
  window.open('https://www.reddit.com/','pop-up','width=650,height=500,left=400,top=200');

});



});