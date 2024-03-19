const searchClima = document.getElementById('searchClima');
const BtnSearchClima = document.querySelector('.btnSearchClima');
const climaTemp = document.querySelector('#climaTemp');
const climaCity = document.querySelector('#climaCity');
const climaHumidity = document.querySelector('#climaHumidity');
const climaDesc = document.querySelector('#climaDesc');
const climaFlag = document.querySelector('#climaFlag');
const climaIcon = document.querySelector('#climaIcon');
const climaWind = document.querySelector('#climaWind');
const climaDisplayInfos = document.querySelector('.climaDisplayInfos');
const buttons = document.querySelector('.buttons');

const apiKey = "";

const getAPIData = async (city) => {
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    const res = await fetch(APIUrl);
    const data = await res.json();

    return data;
};

const showData = async (city) => {
    const data = await getAPIData(city);
    console.log(data);

    climaCity.innerText = data.name;
    climaTemp.innerText = `${Math.floor(data.main.temp)}°`;
    climaHumidity.innerText = `${data.main.humidity}%`;
    climaDesc.innerText = data.weather[0].description;
    climaFlag.setAttribute(
        'src',
        `https://flagsapi.com/${data.sys.country}/flat/48.png`
    );
    climaIcon.setAttribute(
        'src',
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    climaWind.innerText = `${data.wind.speed}km/h`;
};

buttons.addEventListener('click', (e) => {
    console.log(e);
});

BtnSearchClima.addEventListener('click', () => {
    const city = searchClima.value;
    showData(city);
    climaDisplayInfos.classList.remove('disappear');
});

searchClima.addEventListener('keyup', (e) => {
    console.log(e);
    if (e.key === 'Enter') {
        const city = e.target.value;
        showData(city);
        climaDisplayInfos.classList.remove('disappear');
    }
});
