const { wrap } = require('yargs');
const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        description: 'City ​​address to get the weather',
        demand: true
    }
}).argv;

const getInfo = async(direction) => {
    try {
        const coords = await place.getLatLon(direction);

        const temp = await weather.getWeather(coords.lat, coords.lon);

        return `The Weather of ${coords.direction} is ${temp}.`;

    } catch (err) {
        return `The Weather of ${direction} cannot be searched.`;
    }
};

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);

place.getLatLon(argv.direction).then(console.log);

weather.getWeather(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);