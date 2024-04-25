//exportamos la clasepara poderla importaren el index
export class Weather {
    constructor(city, countryCode)
    {
        this.apiKey ="b3a7d0156fbb2141efd3f68ffe0c72a1";
        this.city = city;
        this.countryCode = countryCode;
    }



    async getWeather()
    {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`;
        const response = await fetch(URI);

        const data = await response.json();
        return data;
    }
    changeLocation(city, countryCode)
    {
        this.city = city;
        this.countryCode = countryCode;
    }
}