// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function museumAdmission() {

  // get user input and declare it as a variable for their age
  let userAge = document.getElementById("age").value;
  let day = document.getElementById("day").value;
  let unchanged = document.getElementById("option1").value;
  
  if (userAge < 5 || userAge > 95) {
      document.getElementById("user-info").innerHTML = "You can get in for FREE.";
  }
  else if (userAge >= 12 && userAge <= 21) {
    document.getElementById("user-info").innerHTML = "You are elegible for a discount.";
  }
  else if (day == "Tuesday" || day == "Thursday") {
    document.getElementById("user-info").innerHTML = "You are elegible for a discount.";
  }
  else {
    document.getElementById("user-info").innerHTML = "You are not elegible for a discount and must pay full price.";
  }

  // Check if user input is empty
  if (userAge === "" || day === unchanged) {
    document.getElementById("user-info").innerHTML = "Please fill out both questions.";
    return;
  }

}
