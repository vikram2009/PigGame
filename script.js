'use strict ';

const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const scores = [0 , 0 ];
let currentscore = 0 ;
let acplayer = 0 ;
const  switchplayer = function () {
    document.getElementById(`current--${acplayer}`).textContent = 0 ;
        acplayer = acplayer == 0 ? 1 : 0;
        currentscore = 0 ; 
        player0EL.classList.toggle('player--active') ;
        player1EL.classList.toggle('player--active') ;


}
let playing = true ; 

score0.textContent= 0;
score1.textContent= 0;
diceEL.classList.add('hidden');

btnroll.addEventListener('click', function(){
    if(playing)

    
    {const dice = Math.trunc(Math.random() * 6) + 1 ;

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    
    if (dice != 1) {

        currentscore = currentscore + dice
        document.getElementById(`current--${acplayer}`).textContent = currentscore ;
        
    } else {
        switchplayer();
        
    }}
});

btnhold.addEventListener('click', function(){
    if(playing) 
    {scores[acplayer] += currentscore ;
    
    document.getElementById(`score--${acplayer}`).textContent = scores[acplayer];

    if (scores[acplayer] >= 9 ) {
            playing = false ; 
        document.querySelector(`.player--${acplayer}`).classList.add('player--winner') ;

        document.querySelector(`.player--${acplayer}`).classList.remove('player--active');
        
    }else{

    switchplayer();
}

}
})

document.querySelector('.btn--new').onclick = function (){
    location.href = 'http://localhost:5500/PIG%20GAME/';
}