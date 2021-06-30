
let beats = {
    "65": {
        beat: new Beat("./audio/Piano Chord 331.mp3"),
        button: new Button("rgb(200, 255, 0)", 65)
    },
    "83": {
        beat: new Beat("./audio/Piano Chord 209.mp3"),
        button: new Button("rgb(200, 255, 0)", 83)
    },
    "68": {
        beat: new Beat("./audio/Piano Chord 208.mp3"),
        button: new Button("rgb(200, 255, 0)", 68)
    },
    "70": {
        beat: new Beat("./audio/Drum Sticks Hit 3.mp3"),
        button: new Button("rgb(0, 255, 179)", 70)
    },
    "71": {
        beat: new Beat("./audio/Drum Snare Roll.mp3"),
        button: new Button("rgb(0, 255, 179)", 71)
    },
    "72": {
        beat: new Beat("./audio/PREL Musical 57.mp3"),
        button: new Button("rgb(0, 255, 179)", 72)
    },
    "74": {
        beat: new Beat("./audio/Cymbal Suspended 2.mp3"),
        button: new Button("rgb(255, 0, 55)", 74)
    },
    "75": {
        beat: new Beat("./audio/Musical Compos 33.mp3"),
        button: new Button("rgb(255, 0, 55)", 75)
    },
    "76": {
        beat: new Beat("./audio/Musical Orches 4.mp3"),
        button: new Button("rgb(255, 0, 55)", 76)
    }
}

triggerBeat = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
    }

}

const myBeat = document.querySelectorAll(".button");
console.log(myBeat);

myBeat.forEach(beat => {console.log(beat.id)})

myBeat.forEach(beat => beat.addEventListener('click', () => {
    let keyPress = beats[beat.id];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
}));

const end = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.button.deselect();
    }

}
document.addEventListener('keydown', triggerBeat)