let one=document.querySelector("#play");
let two=document.querySelector("#com");

let computer = "";
function press(choice) {
  let playerPoint = 0;
  let computerPoint = 0;
  const random = Math.floor(Math.random() * 10);
  if (random >= 0 && random <= 2) {
    computer = "Rock";
  } else if (random > 2 && random <= 5) {
    computer = "Paper";
  } else {
    computer = "Scissor";
  }
  if (choice === computer) {
    return "Ties";
  } else if (choice === "Rock" && computer === "Paper") {
    computerPoint++;
  } else if (choice === "Rock" && computer === "Scissor") {
    playerPoint++;
  } else if (choice === "Paper" && computer === "Rock") {
    playerPoint++;
  } else if (choice === "Paper" && computer === "Scissor") {
    computerPoint++;
  } else if (choice === "Scissor" && computer === "Paper") {
    playerPoint++;
  } else if (choice === "Scissor" && computer === "Rock") {
    computerPoint++;
  }  
  one.innerText=`PLAYER's CHOICE :${choice}`;
  two.innerText=`COMPUTERS's CHOICE :${computer}`;
  result();
function result()
{
    if(playerPoint>computerPoint)
    {
        return document.querySelector("#res1").innerText=`You WINS` ;
    }
    else if(playerPoint===computerPoint)
    {
        return document.querySelector("#res1").innerText=`TIES` ;
    }
    else{
        return document.querySelector("#res1").innerText=`COMPUTER WINS` ;
    }
}
}
