import { showLoader } from "../dom-manipulation/domManipulation";
import { WeatherResponse } from "../model/weatherResponse";

const getWeather = async (city: string): Promise<WeatherResponse> => {
    let API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };

    let response = await fetch(API_CURRENT, requestOptions).then(response => response.json());
    showLoader(false);
    return response;
}

export { getWeather };