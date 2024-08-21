const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    '4740500467bbddd5322c899bb5e8689d'

$(document).ready(function () {
    weatherFn('');
});

async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('Please Enter City.');
        }
    } catch (error) {
         
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#temperature').
        html(`${data.main.temp}°C`);
    $('#description').
        text(data.weather[0].description);
    $('#wind-speed').
        html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').
        attr('src',
            `./image/w2.png`,
           );
    $('#weather-info').fadeIn();
}
