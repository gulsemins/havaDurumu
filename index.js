document.getElementById("searchButton").addEventListener("click", function () {
  var inputElement = document.getElementById("search");
  var inputValue = inputElement.value;
  let weatherResult = document.getElementById("info");
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=b970d20f0a4a4bdba76114359240703&q=${inputValue}&aqi=y`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weatherResult.innerHTML = `
        <h1>Sıcaklık: ${data.current.temp_c}°C </h1>
        <h1>Hava Durumu: ${data.current.condition.text} </h1>
        <h1>Rüzgar: ${data.current.wind_kph} </h1>
        <h1> Nem: ${data.current.humidity} </h1>

      `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  console.log("Alınan Değer: " + inputValue);
});
