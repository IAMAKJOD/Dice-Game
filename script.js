let dice1=document.querySelector(".img1");
let dice2=document.querySelector(".img2");
h1=document.querySelector("h1");

window.addEventListener("load",()=>{
   let diceNumber1=Math.floor(Math.random()*6+1);
   let diceNumber2=Math.floor(Math.random()*6+1);
  dice1=document.querySelector(".img1");
    dice2=document.querySelector(".img2");
    result=document.querySelector("h1");
    dice1.src=`images/dice${diceNumber1}.png`;
    dice2.src=`images/dice${diceNumber2}.png`;

    if(diceNumber1>diceNumber2)
    result.textContent="Player 1 wins";
    else if(diceNumber2>diceNumber1)
    result.textContent="Player 2 Wins";
    else{
        result.textContent="Draw";
    }
});