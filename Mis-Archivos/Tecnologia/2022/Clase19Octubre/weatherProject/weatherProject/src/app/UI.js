// Exportamos la clase para poder importarla en el index
export class UI {
    //Metodo constructor (Se ejecuta solo)
    constructor() {
        // Se traen todos los elementos necesarios
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }
    // Metodo para mostrar en la vista los datos
    render(weather) {
        // Con la funcion textContent insertamos texto en el elemento
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + '°C';
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
        this.wind.textContent = 'Wind ' + weather.wind.speed + 'm/s';
    }
}