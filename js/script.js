// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function discountService() {

  // get user input and declare it as a variable for their age
  let userAge = document.getElementById("age").value;
  

  // Check if user input is empty
  if (userAge) || (select == 0) {
    document.getElementById("user-info").innerHTML = "Please fill out both questions";
    return;

  let select = document.getElementById("day").value;
  let day = select.options[select.selectedIndex].value;

  if (day == "Tuesday") || (day == "Thursday") {
    document.getElementById("user-info").innerHTML = "You are elegible for a discount"
  }
  else if (userAge >= 12) && (userAge <= 21) {
    document.getElementById("user-info").innerHTML = "You are elegible for a discount"
  }
  else {
    document.getElementById("userinfo ")
  }

}
