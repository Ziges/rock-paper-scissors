(function() {
  // your code here
  let userWeapon = "";

  let buttons = document.querySelectorAll(".weapon");
  //add click event for each button, tap into innerhtml of that button, then save it in userWeapon global variable
  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      userWeapon = btn.innerHTML;
    });
  });

  //when play button is clicked 2 outcome messages are rendered as html p elements.
  document.getElementById("js-play").addEventListener("click", function() {

    // event.preventDefault();
    function generateRandomWeapon(weapons) {
      return weapons[Math.floor(Math.random() * weapons.length)];

    }
    const weapons = ["rock", "paper", "scissors"];

    let computerWeapon = generateRandomWeapon(weapons);

    document.getElementById("machine-result").innerHTML = "Computer result: " + computerWeapon;

    setTimeout(function() {
      if (userWeapon == "scissors" && computerWeapon == "paper") {
        document.getElementById("win-or-lose").innerHTML = "You win!";
      }
      else if (computerWeapon == "rock" && userWeapon == "paper") {
        document.getElementById("win-or-lose").innerHTML = "You win!";
      }
      else if (computerWeapon == "paper" && userWeapon == "rock") {
        document.getElementById("win-or-lose").innerHTML = "Computer wins!";
      }
      else if (userWeapon == "scissors" && computerWeapon == "rock") {
        document.getElementById("win-or-lose").innerHTML = "Computer wins!";
      }
      else if (computerWeapon == "scissors" && userWeapon == "rock") {
        document.getElementById("win-or-lose").innerHTML = "You win!";
      }
      else if (computerWeapon == "scissors" && userWeapon == "paper") {
        document.getElementById("win-or-lose").innerHTML = "computer wins!";
      }
      else {
        document.getElementById("win-or-lose").innerHTML = "Draw! Play again!";
      }

    }, 1500);


    setTimeout(function() {
      document.getElementById("game-title").innerHTML = "Refresh page to play again!";
    }, 2500);

  });

})();
