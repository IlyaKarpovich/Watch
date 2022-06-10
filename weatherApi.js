// 9f87d187b38a438606427c49f6a786c3///key Api for home project.  for important project api unshow
// [53.9, 27.5667] minsk 

//Minsk
fetch("https://api.openweathermap.org/data/2.5/weather?lat=53.9&lon=27.5667&appid=9f87d187b38a438606427c49f6a786c3").then(function (resp) {
    return resp.json()
}).then(function (data) {
    console.log(data);
    document.querySelector(".weather_city_minsk").innerHTML = data.name;
    document.querySelector(".weather_city_minsk_deg").innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector(".weather_city_minsk_description").innerHTML = data.weather[0]["description"]; 
    // document.querySelector(".weather_pic_minsk").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
})
//Kiev
fetch("https://api.openweathermap.org/data/2.5/weather?id=703448&appid=9f87d187b38a438606427c49f6a786c3").then(function (resp) {
    return resp.json()
}).then(function (data) {
    console.log(data);
    document.querySelector(".weather_city_kyiv").innerHTML = data.name;
    document.querySelector(".weather_city_kyiv_deg").innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector(".weather_city_kyiv_description").innerHTML = data.weather[0]["description"]; 
    // document.querySelector(".weather_pic_kiev").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
})
// Nur Sultan
fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.1801&lon=71.446&appid=9f87d187b38a438606427c49f6a786c3").then(function (resp) {
    return resp.json()
}).then(function (data) {
    console.log(data);
    document.querySelector(".weather_city_nursultan").innerHTML = data.name;
    document.querySelector(".weather_city_nursultan_deg").innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector(".weather_city_nursultan_description").innerHTML = data.weather[0]["description"]; 
    // document.querySelector(".weather_pic_nursultan").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
})
//Смена городов
function changeWeather() {
    let minsk = document.querySelector('.weather_city_1');
    let kyiv = document.querySelector('.weather_city_2');
    let nursultan = document.querySelector('.weather_city_3');
    minsk.classList = "weather_city_1 animate__animated animate__bounceInUp";
    kyiv.style.display = "none";
    nursultan.style.display = "none";
    setInterval(function(){
        setTimeout(() => {
            minsk.classList = "weather_city_1 animate__animated animate__backOutUp animate__slow";
            kyiv.classList = "weather_city_2 animate__animated animate__bounceInUp animate__slow";
            kyiv.style.display = "flex";
        }, "6000");
        setTimeout(function () {
            kyiv.classList = "weather_city_2 animate__animated animate__backOutUp animate__slow";
            nursultan.classList = "weather_city_3 animate__animated animate__bounceInUp animate__slow";
            nursultan.style.display = "flex";
        }, "12000");
        setTimeout(function () {
            nursultan.classList = "weather_city_3 animate__animated animate__backOutUp animate__slow";
            minsk.classList = "weather_city_1 animate__animated animate__bounceInUp animate__slow";
        },"18000")
},25000);
}
changeWeather();