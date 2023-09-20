/*
Author: Jack Stafford
Date:9-19-23
File Name: script.js
*/

//Hamburger menu function
Function hamburger () {

var menu = document.getElementbyId("menu-links");
var logo = document.getElementbyId("ffc-logo")
}

if (menu.style.display === "block" && logo.style.display === "none") {
  menu.style.display = "none";
  logo.style.display= "block";
}
else {
menu.style.display = "block";
logo.style.display = "none";
}
