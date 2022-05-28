// // Calendar
function calendar() {
const lang = 'en-US';
let date = new Date();
let dayNumber = date.getDate();
let dayName = date.toLocaleString(lang,{weekday: 'long'});
let month = date.getMonth();
let monthName = date.toLocaleString(lang,{month: 'long'});
let year = date.getFullYear();
document.getElementById('month').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;
}
calendar();
//Watch
function clock() {
    const hoursArrow = document.querySelector(".hours");
    const minutesArrow = document.querySelector(".minutes");
    const secondsArrow = document.querySelector(".seconds");
    const deg = 6;
    setInterval(() => {
        const day = new Date();
        const hours = day.getHours() * 30;
        const minutes = day.getMinutes() * deg;
        const seconds = day.getSeconds() * deg;
        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
    }, 0)
}
clock();
// Цифров. часы
const timeElement = document.querySelector('.time');
const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const colon = sec % 2 === 0 ? ':' : ' ';
    timeElement.textContent = `TIME: ${hours}${colon}${min}${colon}${sec}`;
}
tick();
setInterval(tick, 100);
//Смена блоков меню
function ShowWatch() {
    let service = document.querySelector('.service');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');
    let watch = document.querySelector('.watch')
    service.classList = "service animate__animated animate__backOutUp";
    about.classList = "about animate__animated animate__backOutUp";
    contact.classList = "contact animate__animated animate__backOutUp";
    watch.classList = "watch animate__animated animate__slideInUp"
    console.log(about);
}
function textShowService() {
    let service = document.querySelector('.service');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');
    let watch = document.querySelector('.watch')
    service.classList = "service animate__animated animate__slideInUp";
    service.style.display = "block";
    about.classList = "about animate__animated animate__backOutUp";
    contact.classList = "contact animate__animated animate__backOutUp";
    watch.classList = " watch animate__animated animate__backOutUp";
    console.log(about);
}
function textShowAbout() {
    let service = document.querySelector('.service');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');
    let watch = document.querySelector('.watch')
    service.classList = "service animate__animated animate__backOutUp";
    about.classList = "about animate__animated animate__slideInUp";
    about.style.display = "block";
    contact.classList = "contact animate__animated animate__backOutUp";
    watch.classList = " watch animate__animated animate__backOutUp";
    console.log(about);
}
function textShowContact() {
    let service = document.querySelector('.service');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');
    let watch = document.querySelector('.watch')
    service.classList = "service animate__animated animate__backOutUp";
    about.classList = "about animate__animated animate__backOutUp";
    contact.classList = "contact animate__animated animate__slideInUp";
    contact.style.display = "block";
    watch.classList = " watch animate__animated animate__backOutUp";
}








