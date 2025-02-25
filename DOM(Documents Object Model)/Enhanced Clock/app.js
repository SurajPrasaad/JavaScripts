let digitalClock = document.querySelector('.digital-clock');
let dateText = document.querySelector('.date');


let updateClock = () => {
    let date = new Date();
    let hours = (date.getHours() % 12).toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let ampm = hours > 12 ? "AM" : "PM";
    let seconds = date.getSeconds().toString().padStart("2", 0)
    digitalClock.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let currentDate = date.toLocaleDateString(undefined, options)
    dateText.textContent = `${currentDate}`

}
setInterval(updateClock, 1000)
updateClock()
