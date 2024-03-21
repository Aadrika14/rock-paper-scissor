let user_score=0;
let comp_score=0;
let imgs=document.querySelectorAll(".im");

const showWinner=(userWin,userChoice,comp)=>{
    let button=document.querySelector("#btn");
    if(userWin)
    {
        button.innerText=`congo! You Win ${userChoice} beats ${comp} `;
        button.style.backgroundColor="green";
        user_score++;
        let uz=document.querySelector("#user-zero");
        uz.innerText=user_score;
    }
    else{
        button.innerText=`You Lose! ${userChoice} cannot beat ${comp} Try Again!`;
        button.style.backgroundColor="red";
        comp_score++;
        let uc=document.querySelector("#comp-zero");
        uc.innerText=comp_score;
    }
};
const compchoice=()=>{
    let choices=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    let compu= choices[index];
    return compu;
};
const drawn=()=>{
    let button=document.querySelector("#btn");
    button.innerText="game is draw! Try Again!";
    button.style.backgroundColor="red";
}
const play=(userChoice)=>{
    let button=document.querySelector("#btn");
    console.log("img clicked is ",userChoice);
    const comp=compchoice();
    console.log("comp choice is",comp);
    if(userChoice===comp)
    {
       drawn();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=comp==="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=comp==="scissor"?false:true;
        }else{
            userWin=comp==="rock"?false:true;
        }
        showWinner(userWin,userChoice,comp);
    }
};
imgs.forEach((im)=>{
    im.addEventListener("click",()=>{
    let userChoice=im.getAttribute("id");
    play(userChoice);
    })
})