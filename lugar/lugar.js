const axios = require('axios');


const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
 
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '25982c5c13msh8dc67f43b511628p1b0bfejsn62385b7567e0' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
       
        return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}





