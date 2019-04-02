const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fa1c8af0f65e6cc0e6bf0ec6d4653ba8&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}