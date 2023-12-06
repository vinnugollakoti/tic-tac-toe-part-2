let resultDiv = document.querySelector('#result');
let Boxes = document.querySelectorAll('.box');
let messageBox = document.querySelector('#message');
let playAgainBtn = document.getElementById("button");
console.log(Boxes);
let WinningOutComes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

for (button of Boxes) {
  button.addEventListener('click', PlayerChances);
}
let hasAnyPlayerWonOrNot = false;
let xClicks = [];
let oClicks = [];

let clickedCount = 0;
function PlayerChances(event) {
  let Id = Number(event.target.id);

  clickedCount = clickedCount + 1;

  let EachBoxThatNeedsAppendment = Boxes[Id - 1];

  let CreatedPTag = document.createElement('p');
  CreatedPTag.style.color = '#FAB201';
  EachBoxThatNeedsAppendment.appendChild(CreatedPTag);
  EachBoxThatNeedsAppendment.style.pointerEvents = 'none';

  if (clickedCount % 2 == 0) {
    CreatedPTag.innerText = 'X';

    xClicks.push(Id);

    Result('X', xClicks);
  } else {
    CreatedPTag.innerText = 'O';

    oClicks.push(Id);

    Result('O', oClicks);
  }

  if (clickedCount == 9 && hasAnyPlayerWonOrNot == false) {
    resultDiv.style.visibility = 'visible';
    messageBox.innerText = 'Match Is A draw';
  }
}

function Result(PlayerPlaying, PlayersArray) {
  for (let i = 0; i < 8; i++) {
    let count = 0;
    for (let j = 0; j < 3; j++) {
      if (PlayersArray.includes(WinningOutComes[i][j]) === true) {
        count = count + 1;
      }
    }

    if (count == 3) {
      hasAnyPlayerWonOrNot = true;
      resultDiv.style.visibility = 'visible';
      messageBox.innerText = PlayerPlaying + ' Has Won The Match';
    }
  }
}


playAgainBtn.addEventListener("click",function(){
  window.location.reload();
})