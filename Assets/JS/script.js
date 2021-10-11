//variables
var timer;
var timeLeft=0
var questions = [
    {
        answer:"Answer 1",
        correct:"no"
    },
    {
        answer:"Answer 2",
        correct:"yes"
    },
    {
        answer:"Answer 3",
        correct:"no"
    },
]

//Starts the quiz when the button is pressed
function startQuiz () {
    $("#start").hide();
    $("#question1").show();
    displayQuestion();
}

//start timer at 120 seconds and finish when time runs out
function startTimer() {
    timeLeft=120;
    timer=setInterval(function() {
        timeLeft--;
        if(timeLeft===0) {
            finish();
        }
        document.getElementById("timer").innerText=timeLeft;
    },1000)
}

//End of Game function
function finish() {
    clearInterval(timer);
    alert("Game Over!!");
}

//Subtract 10 seconds funtion
function subtractTime() {
    timeLeft-=10;
    if(timeLeft===0) {
        finish();
    }
}

$("#start").click(startQuiz);

document.getElementById("wrongAnswer").addEventListener("click",subtractTime);

document.getElementByID("startQuiz").addEventListener("click",startTimer)