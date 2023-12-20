const button=document.querySelector("#button")
button.addEventListener("click",fun);

let object={
    Name : '',
    Blance:0,
};

function fun(){
     const name=document.querySelector("#name").value
   
     const price=document.querySelector("#amount")
    const amount= price.value;
     const selection =document.querySelector("#sec").value;
    

     if(selection==="deposit"){
           object.Name=name;
           object.Blance=parseInt(object.Blance)+parseInt(amount);
           

           alert(`Current Blance  $${object.Blance}`);

          

     } else if(selection==="withdrow"){
        if(object.Blance>0){
            object.Blance=parseInt(object.Blance)-parseInt(amount);

            alert(`Current Blance  $${object.Blance}`);
        }
     }
}