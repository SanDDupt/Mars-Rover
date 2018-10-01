var rover =
{
  direction : "N",
  x : 0,
  y : 0,
  travelLog : [[0,0]]
};

function turnLeft(rover)
{
switch(rover.direction)
  { case "N" : rover.direction = "W";              
      break;
    case "E" : rover.direction = "N";
      break;
    case "S" : rover.direction = "E";
      break;
    case "W" : rover.direction = "S";
      break;
    default : console.log("undefined");
  }  
};

function turnRight(rover)
{
  switch(rover.direction)
  { case "N" : rover.direction = "E";                
      break;
    case "E" : rover.direction = "S";
      break;
    case "S" : rover.direction = "W";
      break;
    case "W" : rover.direction = "N";
      break;
    default : console.log("undefined");
  }  
};

function moveForward(rover)
{
  switch(rover.direction)
  { case "N" : rover.x = rover.x ; rover.y = rover.y-1;
      break;
    case "E" : rover.x = rover.x+1 ; rover.y = rover.y;
      break;
    case "S" : rover.x = rover.x ; rover.y = rover.y+1;
      break;
    case "W" : rover.x = rover.x-1 ; rover.y = rover.y;
      break;
    default : console.log("undefined");
  }  
};

function deplacement(instructions)
{
  for (var i = 0; i < instructions.length; i++) 
  {
    switch(instructions[i])
    { case "l" : turnLeft(rover);
        break;
      case "r" : turnRight(rover);
        break;
      case "f" : moveForward(rover);
                 rover.travelLog.push([rover.x,rover.y]);
        break;
      default : console.log("undefined");    
    }    
  };
  console.log(rover.travelLog);  
};





