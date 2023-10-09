const API_KEY = `ecdf0d3a10c430f1a90e79bdb3cace1a`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const button = document.querySelector("button");
const weather = document.querySelector("#weather");

function myFunction() {
    const getWeather = async (city) => {

        weather.innerHTML = `<h2>Loading...</h2>`
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        const response = await fetch(url);
        const data = await response.json()
        return showWeather(data);
    }

    const showWeather = (data) => {
        if (data.cod == "404") {
            weather.innerHTML = `<h2>City not found</h2>`
            return;
        }


        weather.innerHTML = `
             <div>
                 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">
             </div>

             <div>       
                <h2>${data.main.temp} ℃</h2>
                <h3>${data.weather[0].main}</h3>
             </div>

               `
    }
    form.addEventListener("submit", function (event) {
        getWeather(search.value)
        event.preventDefault();
    })

}