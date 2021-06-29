
let flag = false;
let lockBoard = false;
let firstCard, dataNameForFirstCard, secondCard, dataNameForSecondCard
const cards = document.querySelectorAll(".memory-card")
cards.forEach(card => card.addEventListener('click',flipCard))
function flipCard(e){
   if (lockBoard === true) {return} //fix bug
   if (e.target.parentElement === firstCard) {return} //fix bug
   e.target.parentElement.classList.toggle('flip');

   if (flag == false){
     console.log("first card")
     flag = true
     //first card has been flipped
     firstCard = e.target.parentElement;
     dataNameForFirstCard = firstCard.dataset.name
   }else{
      //second card has been flipped 
      secondCard = e.target.parentElement;
      dataNameForSecondCard = secondCard.dataset.name
      checkForMatch(e);
   }
   
   
}
function checkForMatch(e){
   console.log("flag in function check ForMatch: ", flag)
   if (dataNameForSecondCard === dataNameForFirstCard){
      disableCards();
      //score=score+1
   }else{
      unFlipCards();
      //chances = chances - 1   
   }
}


function disableCards(){
   lockBoard = true
   firstCard.removeEventListener('click',flipCard)
   secondCard.removeEventListener('click',flipCard)
   resetBoard()
}

function unFlipCards(){
   setTimeout(()=>{
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
      resetBoard()
   },1000)

}

function resetBoard(){
   flag = false
   lockBoard = false
   firstCard = null
   secondCard = null
}

// this is a Imediately Invoked Function Expression 
{function shuffle(){
   cards.forEach(card => {
      let randomNumber = Math.floor(Math.random()*12)
      card.style.order = randomNumber
   })
}}
