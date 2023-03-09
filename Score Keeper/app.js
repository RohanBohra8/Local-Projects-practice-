const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const matchScore = document.querySelector('#play');


let p1CurrScore = 0;
let p2CurrScore = 0;
let winningScore = 5;
let isGameOver = false;


//increase score and checks who wins(for player 1)
p1Button.addEventListener('click', function() {
    if(!isGameOver) { //if isGameOver becomes true, then both players score will not incerease because one of them has won
        p1CurrScore +=1;
        if(p1CurrScore === winningScore) {
            isGameOver = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
            p1Button.disabled = true; //disables the buttons
            p2Button.disabled = true;
        }
        p1Score.textContent = p1CurrScore; 
    }
})


//increase score and checks who wins(for player 2)
p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        p2CurrScore +=1;
        if(p2CurrScore === winningScore) {
            isGameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
            p1Button.disabled = true; //disables the buttons
            p2Button.disabled = true;
        }
        p2Score.textContent = p2CurrScore;
    }
})

//reset everything  
resetButton.addEventListener('click', function () {
      reset();
})

matchScore.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
      p1CurrScore = 0;
      p2CurrScore = 0;
      p1Score.textContent = p1CurrScore;
      p2Score.textContent = p2CurrScore;
      p1Score.classList.remove('winner','loser');
      p2Score.classList.remove('winner','loser');  
      p1Button.disabled = false; //un-disables the buttons
      p2Button.disabled = false;

}



// function update(score) {
//     score = parseInt(score);
//     score++;
//     return `${score}`;
// }