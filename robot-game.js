//Area for all the global variables.

const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'

let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'

let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;
//Area for all the functions below:

randomChoreDoorGenerator = () => {
choreDoor = Math.floor(Math.random() * numClosedDoors);
if(choreDoor === 0) {
openDoor1 = botDoorPath;
openDoor2 = beachDoorPath;
openDoor3 = spaceDoorPath;
} else if(choreDoor === 1) {
openDoor2 = botDoorPath;
openDoor1 = beachDoorPath;
openDoor3 = spaceDoorPath;
} else if(choreDoor === 2) {
openDoor3 = botDoorPath;
openDoor2 = beachDoorPath;
openDoor1 = spaceDoorPath;
};
}

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
doorImage1.src = openDoor1;
playDoor(doorImage1);
  }
  startButton.startRound();
}

doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
doorImage2.src = openDoor2;
playDoor(doorImage2);
  }
  startButton.startRound();
}

doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
doorImage3.src = openDoor3;
playDoor(doorImage3);
  }
  startButton.startRound();
}

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false
  } else {
    return true
  }
}

startButton.onclick = () => {
  startRound();
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good Luck!';
  randomChoreDoorGenerator();
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
  gameOver('win')
} else if(isBot(door)) {
  gameOver()
}
}

const gameOver = (status) => {
if(status === 'win') {
  startButton.innerHTML = 'You win! Play again?'

} else {
  startButton.innerHTML = 'Game over! Play again?'
}
  currentlyPlaying = false;
}


startRound();
