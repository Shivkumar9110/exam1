function color(color1,color2){
    switch(color1){
        case 'red':
            switch(color2){
                case 'blue':
                    console.log("purple");
                break;

                case 'yellow':
                    console.log("arange");
                break;

                default:
                    console.log("Invalid color combination")
                break;
            }
        break;
        
        case 'blue':
            switch(color2){
                case 'yellow':
                    console.log("green")
                break;

                default:
                    console.log("Invalid color combination")
                break;
            }
        break;

        default:
            console.log("Invalid color combination")
        break;
    }
}

color("red" , "yellow");
color("white","red");