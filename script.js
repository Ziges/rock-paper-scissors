(function () {
    // your code here

    // let user = [];
    // let randomWeapon = [];


    document.getElementById("js-play").addEventListener("click", function () {

        // event.preventDefault();
        function generateRandomWeapon (weapons) {
            return weapons[Math.floor(Math.random()*weapons.length)];
        }
        const weapons = ["rock", "paper", "scissors"];

        const randomWeapon = generateRandomWeapon(weapons);

        console.log(randomWeapon);

    });

    function userChoice () {
        let buttons = document.querySelectorAll(".weapon");

        buttons.forEach(function (btn){
            //add click event for each button, tap into innerhtml of that button.
            btn.addEventListener("click", function (){

                return btn.innerHTML;
            });
        });
    }
    const userWeapon = userChoice();
    console.log(userWeapon);
    //
    // if (randomWeapon == userWeapon) {
    //     console.log("bingo");
    // } else {
    //     console.log("dam");
    // }


})();


// let buttons = document.querySelectorAll('.popupbutton')
//
// But you get an “Array” (NodeList) so:
//
//     buttons[0].addEventListener("click", function(){
//         alert('hi')
//     })