//variables
var goal = 0;
var wins = 0;
var losses = 0;
var guessesRight = true;
var guessesWrong = false;
var crystalBlu= 0;
var crystalPur= 0;
var crystalRed= 0;
var crystalYel= 0;
var totalScore = crystalBlu + crystalPur + crystalRed + crystalYel;

//write a function with a random number for goal total
$(document).ready(function randomNumber() {
    $("#random-button").on("click", function() {
      var random = Math.floor(Math.random() * 1000) + 1;
      $("#random-number").text(random);
    });
  });
//write a function that puts the total number of all of the crystals within the #goal placement

//write a function that creates buttons for each of the crystals
$(document).ready(function(){
  $("img").click(function(){
    $(this).hide();
  });
//write a function that lists the totalScore of the crystal bottons pressed.

//write a function that totals out the number of wins 

//write a function that totals out the numer of losses

