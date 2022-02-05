var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ colorOne.value 
		+ ", "
		+ colorTwo.value
		+ ")";

		css.textContent = body.style.background + ";";
}
colorOne.setGradient();
colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);

