const axios = require('axios');

const getWeather = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a7485e7c107d3480c331bd3ddae86e75`);

    return resp.data.main.temp;

};

module.exports = {
    getWeather
};