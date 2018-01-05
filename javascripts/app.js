var car = {
  name: "MarsRover",
  direction: "N",
  x : 0,
  y : 0,
  travelLog : []
};
var listCommands = ["r", "l", "f", "b"];
// ======================

function turnRight(car){
	switch(car.direction){
		case "N":
			car.direction = "E";
			break;
		case "E":
			car.direction = "S";
			break;
    case "W":
    	car.direction = "N";
      break;
    case "S":
      car.direction = "W";
      break;
  }
  //console.log(car);
}

function turnLeft(car){
  switch (car.direction){
    case "N":
      car.direction = "W";
      break;
    case "E":
      car.direction = "N";
      break;
    case "W":
      car.direction = "S";
      break;
    case "S":
      car.direction = "E";
      break;
  }
  //console.log(car);

}

function moveForward(car){
  switch (car.direction) {
    case "W":
      car.x = car.x-1;
      break;
    case "E":
      car.x = car.x+1;
      break;
    case "N":
     car.y = car.y-1;
     break;
    case "S":
     car.y = car.y+1;
     break;
    }
    //console.log(car);
}

function commands(string) {
  for (i=0; i<string.length; i++){
    switch (string[i]) {
      case "r":
        console.log("R");
        turnRight(car);
        break;
      case "l":
        console.log("L");
        turnLeft(car);
        break;
      case "f":
        console.log("F");
        moveForward(car);
        break;
    }
    console.log({x: car.x, y: car.y});
    car.travelLog.push({x : car.x, y: car.y});
  }
  console.log("HE VIAJADO A TODOS ESTOS SITIOS: ", car.travelLog);
}


commands("ffrlfrl");
