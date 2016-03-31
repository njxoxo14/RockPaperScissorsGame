var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var randoms = Math.random()*(3-0)+0;
    var random = Math.floor(randoms);
    var selection;
    if(random === 0){
        selection = "Rock";
    }
    else if(random==1){
        selection="Paper";
    }
    else if(random==2){
        selection="Scissors";
    }
    return selection;
    
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    var winner;
if(userValue == aiValue){
    winner = "Draw";
}    
else if(userValue =="Paper" && aiValue == "Rock"){
    winner = "Rock";
}
else if(userValue == "Rock" && aiValue== "Paper"){
    winner="Ai";
}
else if(userValue=="Rock" && aiValue=="Scissors"){
    winner = "User";
}
else if(userValue== "Scissors" && aiValue=="Rock"){
    winner="Ai";
}
else if(userValue == "Scissors" && aiValue=="Paper"){
    winner="User";
}
else if(userValue == "Paper" && aiValue == "Scissors"){
    winner = "Ai";
}
return winner;

    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore(winner) {
    if(winner == "Ai"){
         aiPoint+=1;
    }
    else if(winner=="User"){
        userPoint+=1;
    }
    else{
        aiPoint+=0;
        userPoint+=0;
    }
$("#aiPoint").text(aiPoint);

        $("#userPoint").text(userPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'User' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'Draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
    setScore(winner);
}

// This function runs on page load


    // This function runs on page load
    $(document).ready(function(){
        $(".token").click(function(evt){
           evaluate(evt); 
        });
    });


       