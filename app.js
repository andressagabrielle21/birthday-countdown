const countdown = () => {
    const countDate = new Date('March 21, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time works like this:
    const seconds = 1000;
    const minute = seconds * 60;
    const hours = minute * 60;
    const days = hours * 24;

    // Transforming miliseconds to days, hours, minutes and seconds
    const textDay = Math.floor(gap / days);
    const textHour = Math.floor((gap % days) / hours);
    const textMinute = Math.floor((gap % hours) / minute);
    const textSeconds = Math.floor((gap % minute) / seconds);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSeconds;

}

// Let the time continously updating, letting the function countdown() run multiple times
setInterval(countdown, 1000) //You want it to run every single second (1000 -> miliseconds)