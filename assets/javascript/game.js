//variables
var goal = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;

//write a function with a random number for each crystal
$(document).ready(function() {
    $("#random-button").on("click", function() {
      var random = Math.floor(Math.random() * 1000) + 1;
      $("#random-number").text(random);
    });
  });
//write a function that puts the total number of all of the crystals within the #goal placement

//write a function that creates buttons for each of the crystals

//write a function that lists the totalScore of the crystal bottons pressed.

//write a function that totals out the number of wins 

//write a function that totals out the numer of losses

