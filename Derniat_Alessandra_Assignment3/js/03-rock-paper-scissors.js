// ENGAGE PLAYER
alert("Play 'Rock-Paper-Scissors' with the Computer today!");

// USER MAKES A CHOICE
var userChoice = prompt("Enter rock, paper, or scissors.");

function userPicks(a) {
  switch(userChoice) {
    case "rock":
      alert("Your choice is rock.");
      break;
    case "paper":
      alert("Your choice is paper.");
      break;
    case "scissors":
      alert("Your choice is scissors.");
      break;
    default:
      alert("Your entry is invalid. Try again.");
      userChoice = prompt("Enter rock, paper, or scissors.");
      userPicks();
  }
}
userPicks();


// COMPUTER MAKES A CHOICE
var computerChoice = Math.random();


if (computerChoice <= 0.34) {
    computerChoice = "rock";
}
else if (computerChoice > 0.34 && computerChoice <= 0.67) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}
alert("Computer's choice is " + computerChoice + ".");

 

// COMPARING TO SEE WHO WINS 
function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    alert("The result is a tie!");
  }

  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      alert("You chose rock but Computer chose scissors. \nYou win with rock smashing scissors.");
    }
    else if (computerChoice === "paper") {
      alert("You chose rock but Computer chose paper. \nComputer wins with paper covering rock.");
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      alert("You chose paper but Computer chose rock. \nYou win with paper covering rock.");
      }
    else if (computerChoice === "scissors") {
      alert("You chose paper but Computer chose scissors. \nComputer wins with scissors cutting paper.");
      }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      alert("You chose scissors but Computer chose rock. \nComputer wins with rock smashing scissors.");
    }
    else if (computerChoice === "paper") {
      alert("You chose scissors but Computer chose paper. \nYou win with scissors cutting paper.");
    }
  }
}
compare(userChoice, computerChoice);

alert("Goodbye! \nRefresh the page to play again.");




