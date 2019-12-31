var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
   + ")";

   css.textContent = body.style.background + ";";
   console.log("input");
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.onclick = randomGradient;

function randomGradient() {
   var r1 = Math.round(Math.random() * 255);
   var g1 = Math.round(Math.random() * 255);
   var b1 = Math.round(Math.random() * 255);

   var r2 = Math.round(Math.random() * 255);
   var g2 = Math.round(Math.random() * 255);
   var b2 = Math.round(Math.random() * 255);

   var rgb1 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
   var rgb2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";

   body.style.background = 
	"linear-gradient(to right, " 
	+ rgb1 
	+ ", " 
	+ rgb2 
   + ")";
   
   console.log("random");

   css.textContent = body.style.background + ";";
}