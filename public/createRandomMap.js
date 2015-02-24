var width = window.innerWidth;
var height = window.innerHeight;

var createRandomObj = function(){
	var mapObj = [];
	for(var i=0; i<10000; i++){
		mapObj.push([getRandomInt(-180, 180), getRandomInt(-90, 90), getRandomInt(0, 9)]);
	}
	return mapObj;
}

function createCanvas(callback) {
	var canvas = $('#myCanvas');
	canvas.attr("height", height);
	canvas.attr("width", width);
	var context = canvas[0].getContext('2d');
	var imageObj = new Image();

	imageObj.onload = function() {
	    context.drawImage(imageObj, 0, 0, width, height);
			callback();
	};
	imageObj.src = 'img/worldmap.jpg';
}

var colorMap = [
	'#00FF00',
	'#55FF00',
	'#AAFF00',
	'#D4FF00',
	'#FFFF00',
	'#FFAA00',
	'#FF7F00',
	'#FF5500',
	'#FF2A00',
	'#FF0000'
];

function drawPoints(points) {
	var c = document.getElementById('myCanvas');
	var ctx = c.getContext('2d');
	var ratioX = width/360;
	var ratioY = height/180;
	points.forEach(function(point){
		ctx.fillStyle = colorMap[point[2]];
		var x = (point[0] + 180) * ratioX;
		var y = (point[1] + 90) * ratioY;
		ctx.fillRect(x, y, ratioX, ratioY);
		// console.log(point);
		// console.log('x:' + x + ', y:' + y);
	});
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function(){
	createCanvas(function(){
		// var points = createRandomObj();
		$.getJSON('api/points', function(res) {
			var points = JSON.parse(res);
			drawPoints(points);
		});
	});
});
