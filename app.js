let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-game");
let  msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // playerx, player0
let count = 0;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
] ;

const  resetGame = ()=>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});
let gameDraw = ()=>{
        msg.innerText = `Game was Draw, Start New game`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    

};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};



const showWinner = (winner) =>{
    msg.innerText = `Congratulation, 🏆WINNER🥇 is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
    
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2  = boxes[pattern[1]].innerText;
        let posVal3  =  boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 ){
            if(posVal1===posVal2 && posVal2===posVal3){
                showWinner(posVal1); 
                return true;
            }
            
        }
    }
} ;



newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
console.log(resetBtn);