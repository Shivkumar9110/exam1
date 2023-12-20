function Name(Name){
    const firstLatter = Name;

    
    const removeFristLatter=firstLatter.charAt(0)
    if(removeFristLatter=== removeFristLatter.toLowerCase()){
         const result= removeFristLatter.toUpperCase()+firstLatter.slice(1);
         console.log(`It is the input Value from user ${firstLatter} and this is output Value after processing by the code: ${result}`)


    }else{
        console.log(` We are already input the value in word toUpperCase:-- ${firstLatter}`)
    }
    



}

Name("amisha");


