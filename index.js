
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];

function nextSequence() {
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[nextSequence()]; 
    gamePattern.push(randomChosenColor);
    
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("./sounds/"+randomChosenColor+".mp3");
    audio.play();   
}
$(".btn").on("click", function() {
    let userChosenColor =  $(this).attr("id");
    userClickedPattern.push(userChosenColor);
})

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
