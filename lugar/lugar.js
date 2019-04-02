const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'd81c9583b1mshb6589a597a0b317p1efb2ejsn2e88f9442807' }
    });


    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion}`)
    }

    const data = resp.data.Results[0];
    const direccion_ = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion_,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}