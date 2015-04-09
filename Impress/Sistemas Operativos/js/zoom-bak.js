// zoom.js
// Eduardo Grosclaude 2013


function zoom(e) {
	var rect = e.getBoundingClientRect();
	//console.log(rect.top, rect.right, rect.bottom, rect.left);
	var clickX = 100 * (window.event.clientX - rect.left) / (rect.right - rect.left);
	var clickY = 100 * (window.event.clientY - rect.top) / (rect.bottom - rect.top);
	var webkit = "-webkit-transform-origin: " + clickX + "% " + clickY + "%;";
	var moz = "-moz-transform-origin: " + clickX + "% " + clickY + "%;";
    var prop = ".zoomable img { " + webkit + moz + "}"
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = prop;
	document.getElementsByTagName('head')[0].appendChild(style);
	e.className = e.className ? '' : 'zoom';
}


