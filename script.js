async function getData(location){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=85dcd6fa2c774e63ba084711232209&q=${location}`);
    const data = await response.json();
    console.log(data);
    console.log(data.location.name);
    console.log(data.current.temp_c);
    console.log(data.current.feelslike_c);
    console.log(data.current.humidity);
    console.log(data.current.wind_kph);
    return{
        name: data.location.name,
        temp: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph
    }

}

function displayData(data){
    const name = document.getElementsByClassName("location")[0];
    name.innerText = data.name;
    const temp = document.getElementsByClassName("temperature")[0];
    temp.innerText = `${data.temp} °C`;
    const feelsLike = document.getElementsByClassName("feelsLike")[0];
    feelsLike.innerText = `${data.feelsLike} °C`;
    const humidity = document.getElementsByClassName("humidity")[0];
    humidity.innerText = `${data.humidity} %`;
    const wind = document.getElementsByClassName("wind")[0];
    wind.innerText = `${data.wind} km/h`;
}

(function eventHandler(){

    async function performSearch(){
        const searchTerm = searchInput.value;
        searchInput.value = "";
        const dataObject = await getData(searchTerm);
        displayData(dataObject);

    }
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("keyup", function(event){
        if(event.key === 'Enter'){
            performSearch();
        }
    });
})();
