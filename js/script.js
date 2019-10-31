// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
const r0 = "rock";
const p1 = "paper";
const s2 = "scissors";


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    let comChoice = Math.floor(Math.random() * 4);
    if (comChoice === 0) {
        $("#computerChoice").text(r0);
        comChoice = r0;
    } else if (comChoice === 1) {
        $("computerChoice").text(p1);
        comChoice = p1;
    } else if (comChoice === 2) {
        $("computerChoice").text(s2);
        comChoice = s2;
    }
    let userInput = $("#input").val();
    let uInput = userInput.toLowerCase();
    $("#userChoice").text(uInput);
    if (uInput === "rock" && comChoice === "scissors") {
        $("#result").text(`User wins with ${uInput}!!`);
    } else if (uInput === "rock" && comChoice === "paper") {
        $("#result").text(`Oof Computer wins with ${comChoice}. :(`)
    } else if (uInput === "paper" && comChoice === "rock") {
        $("#result").text(`User wins with ${uInput}!!`);
    } else if (uInput === "paper" && comChoice === "scissors") {
        $("#result").text(`Oof Computer wins with ${comChoice}. :(`)
    } else if (uInput === "scissors" && comChoice === "rock") {
        $("#result").text(`Oof Computer wins with ${comChoice}. :(`)
    } else if (uInput === "scissors" && comChoice === "paper") {
        $("#result").text(`User wins with ${uInput}!!`);
    } else if (uInput === comChoice) {
        $("#result").text("Tieeeee");
    }
});
