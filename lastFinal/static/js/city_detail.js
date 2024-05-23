// Function to initialize the map
function initMap() {
  // Parse latitude and longitude values from the template
  var cityLat = parseFloat("{{ city.latitude }}");
  var cityLng = parseFloat("{{ city.longitude }}");

  // Create a new map instance
  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: cityLat, lng: cityLng },
      zoom: 12
  });

  // Call the getWeather function to fetch weather data for the city
  getWeather('{{ city.city_name }}');
}

// Function to fetch weather data for the city
function getWeather(cityName) {
  var apiKey = '45d0bb895d81e683a2ba339d2efcef82';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Weather API request failed');
          }
          return response.json();
      })
      .then(data => {
          console.log(data); // Log the response data to check its structure
          var weatherDescription = data.weather[0].description;
          var temperature = data.main.temp;
          document.getElementById('weather').innerHTML = `<p>${weatherDescription}, ${temperature}°C</p>`;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}
