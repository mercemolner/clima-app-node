const axios = require('axios');




const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2dbcc403260ab51c8f79795638ac3907&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}



