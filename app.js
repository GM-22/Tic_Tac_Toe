let bosxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turn0= true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


bosxes.forEach((cell) => {
    cell.addEventListener("click", () =>{
        
        if (turn0 === true) {
            cell.innerText = "O"
            turn0 = false;
        } else {
            cell.innerText = "X"
            turn0 = true;
        }
        cell.disabled = true;
        checkWinner();
        
    });
});
const resetGame= () => {
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableboxes= () =>{
    for(let box of bosxes){
        box.disabled = true;
    };
};
const enableBoxes= () =>{
    for(let box of bosxes){
        box.disabled = false;
        box.innerText = "";
    };
};



const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
    
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = bosxes[pattern[0]].innerText;
        let pos2Val = bosxes[pattern[1]].innerText;
        let pos3Val = bosxes[pattern[2]].innerText;
        

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                
            };
        };
    };
};

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);