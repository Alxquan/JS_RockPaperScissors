$(document).ready(function(){

  $("#scissors").on('click', function(){
    var result = compare('scissors', computerChoice());
    $("#decision").html(result);
  });

  $('#rock').on('click', function(){
    var result = compare('rock', computerChoice());
    $("#decision").html(result);
  });

  $('#paper').on('click', function(){
    var result = compare('paper', computerChoice());
    $("#decision").html(result);
  });


  var compare = function(me, opponent) {
    if(me === 'rock') {

        if(opponent === 'rock') {
            return 'Tie';
        } else if (opponent === 'paper') {
          return 'Computer threw paper. You lose!';
        } else if (opponent === 'scissors') {
          return 'Computer threw scissors. You win!';
        }

    } else if (me === 'paper') {

        if(opponent === 'paper') {
          return 'Tie';
        } else if (opponent === 'rock') {
          return 'Computer threw rock. You lose!';
        } else if (opponent === 'scissors') {
          return 'Computer threw scissors. You win!';
      }
    } else if (me === 'scissors') {

        if(opponent === 'scissors') {
          return 'Tie';
        } else if (opponent === 'paper') {
          return 'Computer threw paper. You lose!';
        } else if (opponent === 'rock') {
          return 'Computer threw rock. You win!';
      }
    }
  };
  var computerChoice = function() {
          var random = Math.random();
          if (random < 0.333) {
          return  'rock';
          } else if(random < 0.67777) {
          return 'paper';
          } else {
          return 'scissors';
          }k
  };
});
