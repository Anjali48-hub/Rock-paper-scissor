var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;


var choices=["rock", "paper", "scissor"];

window.onload=function()
{
    for(let i=0;i<3;i++)
    {
        
        let choice =document.createElement("img");
        choice.id=choices[i];
        choice.src =choices[i] +".jpg";
        
        choice.addEventListener("click",selectChoice);
        
    }
}
function selectChoice()
{
    you=this.id;
    document.getElementById("your-choice").src= you +".jpg";
}