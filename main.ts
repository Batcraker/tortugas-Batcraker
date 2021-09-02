basic.forever(() =>{
	console.log('Working');
    //Saving Temperature
    let temperature = input.temperature();

    /////Show Temperature High Normal or Low
    if(temperature >= 34){
        music.playTone(Note.C5, music.beat());
        basic.showArrow(ArrowNames.North);
        basic.clearScreen()
    }else if(temperature <= 26){
        music.playTone(Note.C3, music.beat());
        basic.showArrow(ArrowNames.South);
        basic.clearScreen()
    }else{
        basic.showIcon(IconNames.Happy)
    }

    ////View Temperature
    /*
    input.onButtonPressed(Button.A, ()=>{
        basic.showNumber(temperature)
    })*/

    while(true){
        if(input.buttonIsPressed(Button.A)){
            basic.clearScreen();
            basic.showNumber(temperature)
        }else{
            break;
        }
    }
    
})

/* Author: Juan David carreño */