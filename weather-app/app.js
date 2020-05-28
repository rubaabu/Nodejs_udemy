const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log(process.argv);
const address = process.argv[2];
console.log(address);
geocode(address, (error, data) => {
  if (error) {
    console.log(error);
  }

  forecast(data.latitude, data.longtitude, (error, forecastdata) => {
    if (error) {
      console.log(error);
    }
    console.log("Data", data.location);
    console.log(forecastdata.temp);
  });
});
