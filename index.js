
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let level = 0;
let started = false;    

function nextSequence() {
    userClickedPattern = [];
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
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

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

function startOver() {
    started = false;
    gamePattern = [];
    level = 0;
}