// 9f87d187b38a438606427c49f6a786c3///
//Kiev
fetch("https://api.openweathermap.org/data/2.5/weather?id=703448&appid=9f87d187b38a438606427c49f6a786c3").then(function (resp) {
    return resp.json()
}).then(function (data) {
    console.log(data);
    document.querySelector(".weather_city_kiev").innerHTML = data.name;
    document.querySelector(".weather_city_deg").innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector(".weather_city_description").innerHTML = data.weather[0]["description"]; 
    document.querySelector(".weather_pic").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width="120px" height="90px">`;
})
//Minsk