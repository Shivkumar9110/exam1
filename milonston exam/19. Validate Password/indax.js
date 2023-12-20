const from=document.querySelector("body") 

from.addEventListener("click",function(e){
    e.preventDefault();
})




const btn=document.querySelector("#submit")
 btn.addEventListener("click",fun)
 function fun(){
    const password=document.querySelector("#password").value
        if(password.length>0){
            const heading=document.createElement("h1");
            heading.innerText= "You are logIn."
            document.body.appendChild(heading)
    
        }else{
            alert("invalid password.")
        }
    
 }





