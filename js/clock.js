const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    console.log("it worked");
}

setInterval(getClock, 1000);
// every 1 second 

// setTimeout(getClock, 2000);
// after 2 second

// padStart 숫자가 한자리일때 앞에 0을 추가해주는것