let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerX /PlayerO

// 2d Array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //PlayerO
      box.innerText = "O";
      turnO = false;
    } else {
      //PlayerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


//reSet game
const resetGame = ()=>{
  turnO = true;
  enableBoxes()
}

//Disable Box after Game over
const disableBoxes = ()=>{
   for(let box of boxes){
    box.disabled = true;
   }
}

//enable Boxes
// const enableBoxes = ()=>{
//   for(let box of boxes){
//    box.disabled = false;
//   }
// }


//show Winner
const showWinner = (winner) => {
  msg.innerText = `Conratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes()
};



const checkWinner = () => {
  for (let patten of winPatterns) {
    let pos1Val = boxes[patten[0]].innerText;
    let pos2Val = boxes[patten[1]].innerText;
    let pos3Val = boxes[patten[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val)
         console.log("Winner", pos1Val);
        showWinner(pos1Val);
    }
  }
};



