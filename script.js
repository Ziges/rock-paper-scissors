(function() {
  // your code here

  let userWeapon = "";


  document.getElementById("js-play").addEventListener("click", function() {

    // event.preventDefault();
    function generateRandomWeapon(weapons) {
      return weapons[Math.floor(Math.random() * weapons.length)];
    }
    const weapons = ["rock", "paper", "scissors"];

    let computerWeapon = generateRandomWeapon(weapons);
    console.log(computerWeapon);


    if (computerWeapon == "paper" && userWeapon == "scissors") {
      document.getElementById("win-or-lose").innerHTML = "You win!";
    } else if (computerWeapon == "rock" && userWeapon == "paper") {
      document.getElementById("win-or-lose").innerHTML = "You win!";
    } else if (computerWeapon == "paper" && userWeapon == "rock") {
      document.getElementById("win-or-lose").innerHTML = "Computer wins!";
    } else if (computerWeapon == "rock" && userWeapon == "scissors") {
      document.getElementById("win-or-lose").innerHTML = "Computer wins!";
    } else if (computerWeapon == "scissors" && userWeapon == "rock") {
      document.getElementById("win-or-lose").innerHTML = "You win!";
    } else if (computerWeapon == "scissors" && userWeapon == "paper") {
      document.getElementById("win-or-lose").innerHTML = "You win!";
    } else {
      document.getElementById("win-or-lose").innerHTML = "Draw! You both suck!";
    }


    setTimeout(function() {
      document.getElementById("game-title").innerHTML = "To play again choose a new weapon!";
    }, 2500);

  });







  let buttons = document.querySelectorAll(".weapon");
  //add click event for each button, tap into innerhtml of that button, then save it in lastBtnClicked global variable
  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      console.log(btn.innerHTML);
      userWeapon = btn.innerHTML;
    });
  });

})();
