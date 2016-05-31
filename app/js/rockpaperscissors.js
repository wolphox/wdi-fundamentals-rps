
playToThree();

function getInput() {
  
    var valid = false;
    
    while (valid === false)
    {
        var result = prompt();
    
        if (result === "rock" ||result === "paper" ||result === "scissors")
            {   
                valid = true;
                return result;
            }
    
        else { 
            alert("\n\n********************\nBad move!\n\nType in lowercase and choose\n\n'rock'\n\n'paper\n\nOR\n\n'scissors'\n\n********************\n")
            valid = false;
        }   
    }
}

function randomPlay() {
    
    var randomNumber = Math.random();
    
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getComputerMove(move) {
    
    return randomPlay();
}

function getWinner(playerMove, computerMove) {
var winner = "";
        if (playerMove === "rock" && computerMove === "rock")
             { winner = "Tie!"; }
       
        else if (playerMove === "rock" && computerMove === "paper")
             { winner = "Computer Wins!"; }
          
        else if (playerMove === "rock" && computerMove === "scissors")
             { winner =  "Player Wins!"; }
       
        else if (playerMove === "paper" && computerMove === "rock")
             { winner =  "Player Wins!"; }
             
        else if (playerMove === "paper" && computerMove === "paper")
             { winner =  "Tie!"; }
           
        else if (playerMove === "paper" && computerMove === "scissors")
             { winner =  "Computer Wins!"; }
            
        else if (playerMove === "scissors" && computerMove === "rock")
             { winner =  "Computer Wins!"; }
            
        else if (playerMove === "scissors" && computerMove === "paper")
             { winner =  "Player Wins!"; }
             
        else if (playerMove === "scissors" && computerMove === "scissors")
             { winner =  "Tie!"; }
             
       
     return winner;
}

function playToThree() {
    
    alert("\n\n********************\nLet's play Rock, Paper, Scissors!\n\nFirst to 3 wins!\n\n********************\n");
    
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 3 && computerWins < 3)
    {
        var playerMove = getInput();
        var computerMove = randomPlay();
        var winner = getWinner(playerMove, computerMove);
            
       
        
        if (winner === "Computer Wins!")
        {
            computerWins +=1
        }
        else if (winner === "Player Wins!")
        {
            playerWins +=1
        }
        else (winner === "Tie!")
            {
                
            }
            
        alert("\n********************\n********************\n\nYou played "+ playerMove+"\nComputer played "+computerMove+"\n\n"+winner+"\n\nThe score is...\nPlayer: "+playerWins+"\nComputer: "+computerWins+"\n\n********************\n********************\n")
                    
        if (playerWins === 3)
            {
                alert("\n\n********************\nYOU WIN!!!!!!!!\n\n********************\n");
                break;
            }
        else if (computerWins === 3)
            {
                alert("\n\n********************\nYou lost.\n\n********************\n");
                break;
            }
        
    }
    return
}


