
// This function gets the current time and injects it into the DOM
function time(){
	// Gets the current time
	var now =  new Date();
	// Get the hours, minutes and seconds from the current time
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	var color = "#" + h + m + s;

	// Format hours, minutes and seconds
	if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
	document.getElementById("clock").innerHTML = "#" + h + m + s;
	document.body.style.background = color 
}

//This is the key to making the clock function.
function showClock(){
 	setInterval(time, 200);
}

showClock();		