const p1 = {
    score: 0,
    button : document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button : document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const progressBar1= document.querySelector('#progressBar1');
const progressBar2 = document.querySelector('#progressBar2');
const rButton = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

let winningScore=3;
let isGameOver = false;


function updateProgressBar(pBar,score,winningScore){
    const step = 100/winningScore;
    pBar.value = score*step;
}


function updateScores(player,opponent){
    if(!isGameOver){
        player.score+=1;
        if(player ===p1)updateProgressBar(progressBar1,player.score,winningScore);
        if(player === p2)updateProgressBar(progressBar2,player.score,winningScore);
        if(player.score === winningScore){
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
    }
    player.display.textContent= player.score;
    }
}

p1.button.addEventListener('click',function (){
    updateScores(p1,p2)
})


p2.button.addEventListener('click',function (){
    updateScores(p2,p1)
})

rButton.addEventListener('click', reset)

playTo.addEventListener('change', function (){
    winningScore=parseInt(this.value);
    reset();
})


function reset(){
    isGameOver=false;
    updateProgressBar(progressBar1, 0, winningScore);
    updateProgressBar(progressBar2, 0, winningScore);
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
        
    }
}
