
const form=document.querySelector("#bd")
form.addEventListener('submit',function(e){
    e.preventDefault()

    const dishName=document.querySelector("#dishName").value;

    

    const dishPrice=parseInt(document.querySelector("#dishPrice").value)

    const People= parseInt(document.querySelector("#NumberofPeople").value)

    const button=document.querySelector('#btn')
    
    button.addEventListener('click',fun)
    function fun(){

        let TotalAmount= dishPrice*People;
        const result=(` The total ${dishName} amount  ${TotalAmount}`);

        let output= document.querySelector("#result");
        output.innerText=result;
          
        
    }

})