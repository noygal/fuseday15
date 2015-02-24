var createRandomObj = function(){
	var mapObj = [];
	for(var i=0; i<100; i++){
		mapObj.push([getRandomInt(-180, 180), getRandomInt(-90, 90), getRandomInt(0, 200)]);
	}

	console.log(JSON.stringify(mapObj));
	return mapObj;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

createRandomObj();


