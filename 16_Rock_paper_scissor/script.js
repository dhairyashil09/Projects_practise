const buttons = document.querySelectorAll('button')
const Output = document.querySelector('.Output')
const UrScore = document.querySelector("#ur-scores")
const PcScore = document.querySelector("#pc-score")

let PlayerScore = 0
let ComputerScore = 0

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const Result = PlayGame(button.id, ComputerPLay())
       Output.innerText = Result
     UrScore.innerText = PlayerScore
     PcScore.innerText  = ComputerScore
    })
})

function ComputerPLay(){
    const choices = ["Rock", "Paper", "Scissors"]  //create array for computer choice so computer can choose them
    const RandomChoice = Math.floor(Math.random()*choices.length) //to choose random choices we use their index length using math function 
    return choices[RandomChoice] //rerturn raandom choice in the function so choices willl be print
    
}

function PlayGame(Player , Computer) {
    if (Player === Computer){
        return `It is Tie`
    }else if ((Player === "Rock" && Computer === "Scissors") || (Player === "Paper" && Computer === "Rock") || (Player === "Scissors" && Computer === "Paper")){
        PlayerScore++;
        return `"You Win!!"  ${Player} Beats ${Computer}`
    }else{
        ComputerScore++;
        return `"You Loose!!" "Computer Won!!" ${Computer} Beats ${Player}`
    }
}
