var randomNumPlayer1 = Math.floor(Math.random() * 6 + 1);
var randomNumPlayer2 = Math.floor(Math.random() * 6 + 1);

if (randomNumPlayer1 > randomNumPlayer2) {
  document.querySelector(".results").innerHTML = "Player 1 WIN!🎉";
} else if (randomNumPlayer2 > randomNumPlayer1) {
  document.querySelector(".results").innerHTML = "Player 2 WIN!🎉";
} else {
  document.querySelector(".results").innerHTML = "No one WIN!😞";
}

document
  .querySelector(".playerOneDice")
  .setAttribute("src", `images/${randomNumPlayer1}.png`);
document
  .querySelector(".playerTwoDice")
  .setAttribute("src", `images/${randomNumPlayer2}.png`);
