/* The froyo machine is off until it's turned on. */
var isOn = false;


/* Find the power button on the page */
var powerButton = document.querySelector('#power img');


/* A callback function to turn the froyo machine on and off */
var togglePower = function(e) {
	if (!isOn) {
		this.src = 'img/power_on.png';
	}
}


/* A callback function to make vanilla froyo */
var vanillaMaker = function(e) {
	//Code to make vanilla yogurt goes here.
};


/* Add an event listener to the power button to bind the togglePower callback function to the click event */
powerButton.addEventListener('click', togglePower);