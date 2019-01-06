const yargs = require('yargs');
const axios = require('axios');
const keys = require('./keys').keys
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const location = encodeURIComponent(argv.address)
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuest}&location=${location}`

axios.get(geocodeUrl)
.then((response) => {
  const lat = response.data.results[0].locations[0].latLng.lat;
  const lng = response.data.results[0].locations[0].latLng.lng;
  const weatherUrl = `https://api.darksky.net/forecast/${keys.darkSky}/${lat},${lng}`
  return axios.get(weatherUrl);
})
.then((response) => {
  const temperature = response.data.currently.temperature;
  const apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${Math.floor((temperature - 32 ) / 1.8)}. It feels like ${Math.floor((apparentTemperature - 32 ) / 1.8)}.`);
})
.catch(error => {
  console.log(error.code)
})
