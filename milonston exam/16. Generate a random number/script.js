const StartGame= document.querySelector("#StartGame")
StartGame.addEventListener("click",startgame)
let from =document.querySelector("form")
function startgame(){
    
    from.style.display="inherit"
    StartGame.style.display="none"
}


// Create Random Number Function 
function RandomNumber(){
    const number=Math.floor(Math.random()*100);
    return number;
}

from.addEventListener("submit",function(e){
    e.preventDefault();
        const Value=document.querySelector("#text")
        const inputValue=parseInt(Value.value);

        // BlankFild
        const BlankFild=document.querySelector("#BlankFild");

        // Chance
        let Chance=document.querySelector("#Chance")
        let GenratedRandomNumber=RandomNumber();
        BlankFild.innerHTML=GenratedRandomNumber;
        // Program Conditions
        
            

        
        if (inputValue===null){
            alert("Please Fill Up the input value");
        }

        else if(inputValue !== GenratedRandomNumber){
            const Congralatution=document.querySelector("#congra").innerHTML="  continue Play ."
            Value.value=" ";
            let ChangeCount=document.querySelector("#chanceCount").innerText;
            ChangeCount.innerText='3'
        }else if(inputValue===GenratedRandomNumber){
            const Congralatution=document.querySelector("#congra").innerHTML="Congratulations You are winner."
        }
        

})
