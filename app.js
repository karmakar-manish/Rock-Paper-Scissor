let userScore = 0, compScore = 0;

//finding which choices are being clicked

const choices = document.querySelectorAll(".choice img");
const msgContainer = document.querySelector(".msg-container")
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore")


choices.forEach((choice)=>{
    // console.log(circle);
    choice.addEventListener("click", ()=>{
        //getting the id of the choice clicked
        const userChoiceId = choice.getAttribute("id");
        // console.log("choice was clicked ", userChoiceId);
        playGame(userChoiceId)
    })
})

//generating a random choice from computer and updating our
//score about who will win the game

const playGame = (userChoice)=>{
    let computerChoice = genCompChoice()
    console.log("Computer choice : ",computerChoice);
    console.log("User choice : ",userChoice);

    let userWin;
    if(computerChoice == userChoice)
    {
        console.log("Draw");
        msgContainer.innerText = "Game was Draw! Play again."
        msgContainer.style.backgroundColor = "#081b31";
    }
    else
    {
        userWin = true;
        //find the cases when computer won
        if(computerChoice=="paper" && userChoice=="rock")
            userWin=false;
        else if(computerChoice=="rock" && userChoice=="scissor")
            userWin=false;
        else if(computerChoice=="scissor" && userChoice=="paper")
            userWin=false;
        
        if(userWin)
        {
            console.log("User won");
            msgContainer.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
            msgContainer.style.backgroundColor = "green"
            userScore++;
        }
        else
        {
            console.log("Computer won");
            msgContainer.innerText = `You lost! ${computerChoice} beats your ${userChoice}`
            msgContainer.style.backgroundColor = "red"
            compScore++;
        }
        //call the fuction to show the scores
        displayScores();
    }
              
}

const displayScores = ()=>{
    //update the score paragraph


    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
}

//finding computer choice
const genCompChoice = ()=>{
    //rock , paper, scissor
    const opt = ["rock", "paper", "scissor"]
    //getting the index
    const ind =  Math.floor(Math.random() * 3);

    return opt[ind];    //returning the computer choice
}