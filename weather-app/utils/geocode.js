const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicnViYWFidWlzYSIsImEiOiJjazl2aXJhZjEwOGMyM2xsZXo2bml1aXJ0In0.bYjzKHcQrlByq7H4bAsWTw&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location ", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location, Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longtitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

const forecast = () => {};

module.exports = geocode;
