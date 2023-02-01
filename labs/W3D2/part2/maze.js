$(addEventListeners);
let gameIsOn=false;
function addEventListeners(){
    $("#start").click(startGame);
    $("#start").nextUntil("#end").each((index,element)=>$(element).mouseover(lostGame($(element))));
    $("#end").mouseover(endGame);
}

function startGame(){
    $("#status").text("You ain't gonna make it believe me");

    gameIsOn=true;
    $("#start").nextUntil("#end").each((index,element)=>$(element).removeClass("youlose"));
}

function lostGame(e){
    return function(){
        if(gameIsOn){
            e.addClass("youlose");
            gameIsOn=false;
            $("#status").text("YEEEES you lost :) click start to play again");
        }
    }
}
function endGame(){
    if(gameIsOn){
        $("#status").text("hmmmm you got lucky this time... Play again if you dare!")

    }
    gameIsOn=false;   
}