let digitalClock = document.querySelector('.digital-clock');
let dateText = document.querySelector('.date');

let hourHand = document.querySelector('.hand.hour');
let minuteHand = document.querySelector('.hand.minute');
let secondHand = document.querySelector('.hand.second');

let updateClock = () => {
    let date = new Date();
    let hours = (date.getHours() % 12 || 12).toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    let ampm = date.getHours() >= 12 ? "PM" : "AM";
    digitalClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let currentDate = date.toLocaleDateString(undefined, options);
    dateText.textContent = `${currentDate}`;

    let hourRotation = (hours % 12) * 30 + minutes * 0.5;
    let minuteRotation = minutes * 6 + seconds * 0.1;
    let secondRotation = seconds * 6;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);
updateClock();