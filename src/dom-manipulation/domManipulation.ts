import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

export const buttonClick = document.getElementById("button-location");
const DateDayname = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const LocationText = document.getElementById("location-text");
const WeatherIconPng = document.getElementById("weather-icon");
const WeatherTemp = document.getElementById("weather-temp");
const WeatherDescription = document.getElementById("weather-desc");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const LocationInput = document.getElementById("weather-location-input");
const Loader = document.getElementById("loader");

export const updateInteface = (weather: WeatherResponse) :void => {
    if (DateDayname) DateDayname.textContent = getDayOfWeek();
    if (DateDay) DateDay.textContent = getDate();
    if (LocationText) LocationText.textContent = weather.name;
    changeWeatherIcon(weather.weather[0].icon ?? "01d");
    if (WeatherTemp) WeatherTemp.textContent = `${Math.floor(weather.main.temp)}°C`;
    if (WeatherDescription) WeatherDescription.textContent = weather.weather[0].description;
    if (maxTemp) maxTemp.textContent = `${Math.floor(weather.main.temp_max)}°C`;
    if (minTemp) minTemp.textContent = `${Math.floor(weather.main.temp_min)}°C`;
    if (humidity) humidity.textContent = `${weather.main.humidity}%`;
    if (wind) wind.textContent = `${weather.wind.speed} m/s`;
}

export function getCity(): string {
    if (LocationInput) {
        return (LocationInput as HTMLInputElement).value;
    }
    return "";
}

export function showLoader(display: boolean): void {
    if (Loader) Loader.style.visibility = display ? "visible" : "hidden";
}

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}