let boxes = document.querySelectorAll(".box"); // array of boxes
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
const winningPatterns = [
    // array of arrays
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
        // console.log("Box was clicked");
        count ++;
        if (turnO == true) {
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#f2120a";
            turnO = true;
        }
        box.disabled = true;
        box.style.backgroundColor = "#dbdbdb";
        checkWinner();
    });
});

const newGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.style.display = "inline";
}

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        box.style.backgroundColor="white";
        count=0;
    }
};

const checkDraw=()=>{
    if(count===9){
        msg.innerText = "Its a draw!";
        msgContainer.classList.remove("hide");
        resetBtn.style.display = "none";
        disableBoxes();
        count=0;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations!\n${winner} Won`;
    msgContainer.classList.remove("hide");
    resetBtn.style.display = "none";
    disableBoxes();
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);
const checkWinner = () => {
    checkDraw();
    for (let pattern of winningPatterns) {
        // pattern will be an array itself eg [0,1,2]
        /* console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]], boxes[pattern[1]],boxes[pattern[2]]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        ); */
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log("Winner", pos1Val);
                boxes[pattern[0]].style.backgroundColor= "greenyellow";
                boxes[pattern[1]].style.backgroundColor= "greenyellow";
                boxes[pattern[2]].style.backgroundColor= "greenyellow";
                showWinner(pos1Val);
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",newGame);