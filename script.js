/*
Author: Jack Stafford
Date:9-19-23
File Name: script.js
*/

//Global variables
var video = document.getElementbyId ("example");
var videosource = document.getElementbyId ("vid-src");
var descriptions = document.getElementbyId ("despsrc");


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


//Function to display teh burpees example video
funciton burpees() {
  videosource.src = "media/burpees.mp4";
  descriptionsoruce.src = "media/burpees-descriptions.vtt";
  video.style.display = "block";
  video.load();
}


//funciton to display the plank example videos
function plank() {
  videosource.src = "media/plank.mp4";
  descriptionsoruce.src = "media/plank-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

//Function to display teh mountain climbers example video
funciton burpees() {
  videosource.src = "media/mc.mp4";
  descriptionsoruce.src = "media/mountain-descriptions.vtt";
  video.style.display = "block";
  video.load();
}
//Function to display a promo Code
funciton discont {} {
  var promo = document.getElementbyId("special");
 promo.firstchild.nodeValue = "Promo Code: D25START";
 promo.style.color = "#ff0000";
 promo.style.fontsize = "2em";
}
