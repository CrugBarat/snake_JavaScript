document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('span');
  const startBtn = document.querySelector('.start');

  // SETUP
  const width = 10;
  let currentIndex = 0; // first div in grid
  let appleIndex = 0;
  let currentSnake = [2, 1, 0]; // 2 for head, 1 for body, 0 for tail
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;


// START/RESTART
function startGame() {

  //remove snake class from divs that current snake array is in
  currentSnake.forEach(index => squares[index].classList.remove('snake'));

  //remove apple class
  squares[appleIndex].classList.remove('apple');

  //reset
  clearInterval(interval);
  score = 0;

  //randomly generate an apple
  //////////

  //start game
  direction = 1;
  scoreDisplay.innerText = score;
  intervalTime = 1000;
  currentSnake = [2, 1, 0];
  currentIndex = 0;
  currentSnake.forEach(index => squares[index].classList.add('snake'));

  //move snake outcomes
  interval = setInterval(moveOutcomes, intervalTime)
}


// SNAKE OUTCOMES
function moveOutcomes () {

  //snake hitting border or self
  if (
    //snake htting border
    //use width to ascertain snake head position in grid
    (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
    (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
    (currentSnake[0] % width === width 0 && direction === -1) || //if snake hits left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake hits top
    squares[currentSnake[0] + direction].classList.contains('snake');
  ) {
    //clear interval if above occurs
    return clearInterval(interval)
  }


  //ascertain tail position
  //remove last tail position and assign it to tail var
  const tail = currentSnake.pop();

  //remove snake class from tail
  squares[tail].classList.remove('snake');

  //give direction to head of array
  currentSnake.unshift(currentSnake[0] + direction);


  //snake gets apple
  if(sqaures[currentSnake[0]].classList.contains('apple')) {

    //remove apple
    squares[currentSnake[0]].classList.remove('apple');

    //add apple to snake
    squares[tail].classList.add('snake');
    currentSnake.push(tail);

    //randomApple()

    //increase score and display
    score++;
    scoreDisplay.textContent = score;

    //increase interval time to increase difficulty
    clearInterval(interval);
    intervalTime = intervalTime * speed;
    interval = setInterval(newOutcomes, intervalTime);
  }

}






  // assign functions to keycodes
  function control(e) {

    // remove snake class from all squares as it moves
    squares[currentIndex].classList.remove('sanke')


    if(e.keyCode === 39) {
      //assign right arrow key to move one div right
      direction = 1;
    } else if (e.keyCode === 38) {
      //assign up arrow key so snake goes back ten divs = up one
      direction = -width;
    } else if (e.keyCode === 37) {
      //assign left arrow key
      direction = -1;
    } else if (e.keyCode === 36) {
      // assign down arrow key
      direction = +width;
    }
  }


// event listener for every time key is pressed
  document.addEventListener('keyup', control);





})
