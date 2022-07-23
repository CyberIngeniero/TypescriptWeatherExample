import './styles/main.scss';
import { buttonClick, getCity, showLoader, updateInteface } from './dom-manipulation/domManipulation';
import { getWeather } from './networking/weather';

export const showWeather = async () => {
    const city =  getCity();
    if (city) {
        showLoader(true);
        const weather = await getWeather(city);
        updateInteface(weather);
    }
};

if (buttonClick) buttonClick.addEventListener('click', showWeather);