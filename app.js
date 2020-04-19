document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('span');
  const startBtn = document.querySelector('.start');

  // setup
  const width = 10;
  let currentIndex = 0; // first div in grid
  let appleIndex = 0;
  let currentSanke = [2, 1, 0]; // 2 for head, 1 for body, 0 for tail
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;


//start and restart game function
function startGame() {

  //remove snake class from divs that current snake array is in
  currentSanke.forEach(index => squares[index].classList.remove('snake'));

  //remove apple class
  squares[appleIndex].classList.remove('apple');

  //reset
  clearInterval(interval);
  score = 0;

  //randomly generate an apple
  //////////

  direction = 1
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
