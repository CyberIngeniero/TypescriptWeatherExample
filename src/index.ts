// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { getWeather } from './networking/weather';

const showWeather = async () => {
    const city =  getCity();
    if (city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    }
};

export { showWeather };

if (buttonClick) buttonClick.addEventListener('click', getCity);