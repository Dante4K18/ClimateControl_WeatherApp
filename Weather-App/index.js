document.getElementById('search-button').addEventListener('click', function() {
  const location = document.getElementById('location-input').value;
  fetchWeather(location);
});

function fetchWeather(location) {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e2b4362d3685385f497b0a9108fc3943&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const temperature = data.main.temp + '°C';
          const humidity = 'Humidity: ' + data.main.humidity + '%';
          const windSpeed = 'Wind Speed: ' + data.wind.speed + ' m/s';
          const weatherCondition = data.weather[0].main.toLowerCase();

          document.getElementById('temperature').textContent = temperature;
          document.getElementById('humidity').textContent = humidity;
          document.getElementById('wind-speed').textContent = windSpeed;

          const iconElement = document.getElementById('weather-icon');
          iconElement.className = 'weather-icon';

          if (weatherCondition.includes('sun')) {
              iconElement.classList.add('sunny');
          } else if (weatherCondition.includes('cloud')) {
              iconElement.classList.add('cloudy');
          } else if (weatherCondition.includes('rain')) {
              iconElement.classList.add('rainy');
          } else if (weatherCondition.includes('snow')) {
              iconElement.classList.add('snowy');
          }
      })
      .catch(error => console.error('Error fetching weather data:', error));
}
