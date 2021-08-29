const loadweatherData = async () => {
    const cityName = document.getElementById('input-city').value.toLowerCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5465f34d91078c55f4fdd6bb937efeb6`;
    document.getElementById('spinner').classList.remove('d-none');
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
    document.getElementById('input-city').value = '';
}

const displayWeather = data => {
    // console.log(data);
    const { main, icon } = data.weather[0];
    const { temp } = data.main;
    const parentDiv = document.getElementById('info');
    document.getElementById('spinner').classList.add('d-none');
    parentDiv.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" />
        <h2>${data.name}</h2>
        <h3>${(temp / 10).toFixed(0)}&deg;C</h3>
        <h1>${main}</h1>
    `
}