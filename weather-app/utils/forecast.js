const request = require("postman-request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a8c9b8e2d996d6906b3a40d6bad248ab&query=" +
    longtitude +
    "," +
    latitude +
    "";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect ", undefined);
    } else if (response.body.current.temperature.length === 0) {
      callback("Unable to show the temperature try again later", undefined);
    } else {
      callback(undefined, {
        temp: response.body.current.temperature,
      });
    }
  });
};
module.exports = forecast;
