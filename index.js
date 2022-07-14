
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() {
    let randomNum = Math.floor(Math.random() * 4);
    return randomNum;
}

let randomChosenColor = buttonColors[nextSequence()]; 
gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
