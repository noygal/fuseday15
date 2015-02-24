var createRandomObj = function(){
	var mapObj = [];
	for(var i=0; i<100; i++){
		mapObj.push([getRandomInt(-180, 180), getRandomInt(-90, 90), getRandomInt(0, 200)]);
	}

	console.log(JSON.stringify(mapObj));

	var canvas = $('#myCanvas');
	var context = canvas.getContext('2d');
	var imageObj = new Image();

	imageObj.onload = function() {
	    context.drawImage(imageObj, 69, 50);
	};
	imageObj.src = 'im/worldmap.jpg';
	return mapObj;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function(){
	createRandomObj();
})


