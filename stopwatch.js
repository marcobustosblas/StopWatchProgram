//S18-05-24 10:17 p.m finished

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let timePassed = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - timePassed;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop(){

    if(isRunning){
        clearInterval(timer);
        timePassed = Date.now() - startTime;
        isRunning = false; 
    }

}

function reset(){

    clearInterval(timer)
    startTime = 0;
    timePassed = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){

    const currentTime = Date.now();
    timePassed = currentTime - startTime;

    let hours = Math.floor(timePassed / (1000 * 60 * 60));
    let minutes = Math.floor(timePassed / (1000 * 60) % 60);
    let seconds = Math.floor(timePassed / 1000 % 60);
    let miliseconds = Math.floor(timePassed % 100 / 10);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    miliseconds = String(miliseconds).padStart(2,'0');
    
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;

}

