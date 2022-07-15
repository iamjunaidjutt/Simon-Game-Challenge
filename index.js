
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let level = 0;
let started = false;

function nextSequence() {
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum]; 
    gamePattern.push(randomChosenColor);
    
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("./sounds/"+randomChosenColor+".mp3");
    audio.play();   
    level++;
    $("h1").text("Level " + level);
}

$(".btn").on("click", function() {
    let userChosenColor =  $(this).attr("id");
    userClickedPattern.push(userChosenColor);
});

function playSound(name) {
    let audio = new Audio("./sounds/"+name+".mp3");
    audio.play(); 
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    },100);
}

$(document).on("keypress", function(event) {
    if(!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});
