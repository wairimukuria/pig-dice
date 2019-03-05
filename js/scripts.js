//businesslogic
window.onload = function() {
    var throwChance = 1; // throw chance for the first player - default 1
    var player1Score = 0;
    var player2Score = 0;



//user interfacelogic
    $('#score-1').html(0);
    $('#score-0').html(0);
    $('#current-0').html(0)
    $('#current-1').html(0)
    // get dice throw score
    function randomDicethrow() {

        return Math.floor(Math.random()*6 +1);
    }
    // switch players
    function switchPlayer() {
        if(throwChance == 1) {
            throwChance = 2;
        }
         else {
            throwChance = 1;
        }
        alert('You scored 1,switch to next player!');
    }
    // player 1 button
    $('#player-1-btn').click(function(event) {
        event.preventDefault();
        if(throwChance == 2) {
            alert('its player twos turn!');

            return;
        }
        var diceThrowScore = randomDicethrow();
        $('#current-0').html(diceThrowScore)
        if(diceThrowScore == 1) {
            switchPlayer();

            return;
        }
        player1Score += diceThrowScore;
        $('#score-0').html(player1Score);

        return;
    });
    // player 2 button
    $('#player-2-btn').click(function(event) {
        event.preventDefault();
        if(throwChance == 1) {
            alert('its player ones turn!');
            return;
        }
        var diceThrowScore = randomDicethrow();
        $('#current-1').html(diceThrowScore)
        if(diceThrowScore == 1) {
            switchPlayer();

            return;
        }
        player2Score += diceThrowScore;
        $('#score-1').html(player2Score);

        return;
    });
    // new game
    $("#new-game").click(function(event) {
       event.preventDefault();
       player1Score = 0;
       player2Score = 0;
       throwChance = 1;
       $('#score-1').html(0);
       $('#score-0').html(0);
       $('#current-0').html(0)
       $('#current-1').html(0)
   });

   if(player1Score >=100) {
       alert('Player 1 is the winner');
   }
   if(player2Score >=100) {
       alert('Player 2 is the winner');
   }
}
