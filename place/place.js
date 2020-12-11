const axios = require('axios');

const getLatLon = async(direction) => {
    const encodeUrl = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key': '8709080516msh47544d704d6c080p16aee5jsna9b4bd582bec'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length = 0) {
        throw new Error(`There are not results for ${direction}`);

    }

    const data = resp.data.Results[0];

    const placeDirection = data.name;

    const lat = data.lat;

    const lon = data.lon;

    return { placeDirection, lat, lon };
};

module.exports = {
    getLatLon
};