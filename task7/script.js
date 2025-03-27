let train = document.getElementById("train");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let position = 0;
let speed = 5; 
let interval;

startBtn.addEventListener("click", () => {
    clearInterval(interval);  
    interval = setInterval(() => {
        position += speed;
        train.style.left = position + "px";

        // Reset train to start if it goes off screen
        if (position > window.innerWidth) {
            position = -train.clientWidth;
        }
    }, 30);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
});

