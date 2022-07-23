import { WeatherResponse } from "../model/weatherResponse";

const getWeather = async (city: string): Promise<WeatherResponse> => {
    let API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

    // try {
    //     const response = await fetch(API_CURRENT,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     if (response.status === 200) {
    //         const data = await response.json();
    //         return data;
    //     }
    // } catch (error) {
    //     if (error instanceof Error) {
    //         console.log(error.message);
    //     }
    // }

    const response = await fetch(API_CURRENT,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        const data = await response.json();
        return data;
}

export { getWeather };