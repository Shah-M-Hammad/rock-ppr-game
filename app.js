let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");

let scoreUser = document.querySelector("#user");
let scoreComp = document.querySelector("#comp");

let genCompChoise = () => {
  let opt = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return opt[idx];
};

let draw = () => {
  console.log("The game is a draw");
  msg.innerText = "The game is a draw.Play again!";
  msg.style.backgroundColor = "black";
};

let showWinner = (userWin, userChoise, compChoise) => {
  if (userWin) {
    userScore++;
    scoreUser.innerText = userScore;

    console.log("you win");
    msg.innerText = `You Win! your ${userChoise} beats ${compChoise} `;
    msg.style.backgroundColor = "green";
  } else { 
    compScore++;
    scoreComp.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You Lose! ${compChoise} beats your ${userChoise} `;
    msg.style.backgroundColor = "red";
  }
};

let gamePlay = (userChoise) => {
  console.log("user choise = ", userChoise);
  let compChoise = genCompChoise();
  console.log("computer choise = ", compChoise);

  if (userChoise === compChoise) {
    draw();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      userWin = compChoise === "paper" ? false : true;
    } else if (userChoise === "paper") {
      userWin = compChoise === "scissors" ? false : true;
    } else {
      userWin = compChoise === "rock" ? false : true;
    }
    showWinner(userWin, userChoise, compChoise);
  }
};

choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    let userChoise = choise.getAttribute("id");
    gamePlay(userChoise);
  });
});
