const pipe=document.querySelector('.pipe');
const pipeGap=document.querySelector('.pipe-gap');
const bird=document.querySelector('.bird img');
const score=document.querySelector('.score p')
var currentScore=0;

const game=document.querySelector('.game');
game.addEventListener('click',(e)=>{
    pipe.style.animation='pipe 4s infinite linear';
    setInterval(()=>{
        addGravity();
    },10)
    e.preventDefault();
})


function restart(){
    currentScore=-1;
    bird.style.top= -350 + 'px';
}

pipe.addEventListener('animationiteration',()=>{
    randomPipeGap();
    calculateScore();
})

setInterval(()=>{
    // addGravity();
    detectCollision();
},10)

function addGravity(){
    const currentBirdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    bird.style.top=((currentBirdTop) + 1) + 'px';
}

function detectCollision(){
    const currentBirdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if(currentBirdTop >= -10){
        alert(`        Game Over! 
        Your Score is : ${currentScore}`)
        restart();
    }
    const currentPipeLeft=parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
    const PipeGapTop=parseInt(window.getComputedStyle(pipeGap).getPropertyValue('top'));
    const pipeGapBottom=PipeGapTop + 170;
    if(currentPipeLeft <= 50 && !((currentBirdTop+700 >= PipeGapTop) && (currentBirdTop+700 <= pipeGapBottom))){
        alert(`        Game Over! 
        Your Score is : ${currentScore}`)
        restart()     
    }
}

function randomPipeGap(){
    const newTop=Math.random()*350;
    pipeGap.style.top=newTop + "px";
}

function calculateScore(){
    currentScore++;
    score.innerHTML=`Your Score is: ${currentScore} <span>Ckick bird and Start the Game . Control Bird using Space-Bar</span>`;
}

function jump(){
    const currentBirdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    bird.style.top=((currentBirdTop) - 70) + 'px';
}