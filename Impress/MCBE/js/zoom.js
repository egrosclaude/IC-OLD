// zoom.js
// Eduardo Grosclaude 2013

var done = 0;
var rect;
var mouseX;
var mouseY;
	

function insertStyle(str) {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = str;
	document.getElementsByTagName('head')[0].appendChild(style);
}

function pan(e) {
	if(e.className == 'zoom') {
		var deltax = (window.event.clientX - mouseX);
		var deltay = (window.event.clientY - mouseY);
		insertStyle(".zoomable img { position: relative; left: " + deltax + "px; top: " + deltay + "px; }");
	}
}

function zoom(e) {
  if(e.className != 'zoom') {
  	if(done != 1) {
  		rect = e.getBoundingClientRect();
  		mouseX = window.event.clientX;
  		mouseY = window.event.clientY;		
		done = 1;
	}
	var clickX = 100 * (window.event.clientX - rect.left) / (rect.right - rect.left);
	var clickY = 100 * (window.event.clientY - rect.top) / (rect.bottom - rect.top);
	var webkit = "-webkit-transform-origin: " + clickX + "% " + clickY + "%;";
	var moz = "-moz-transform-origin: " + clickX + "% " + clickY + "%;";
    var prop = ".zoomable img { "  + webkit + moz + "}";
	insertStyle(prop);
  } else {
  		insertStyle(".zoomable img { position: relative; top: 0px; left: 0px; }");
  		done = 0;
  }

  e.className = e.className ? '' : 'zoom';
}

