const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=a8c9b8e2d996d6906b3a40d6bad248ab&query=40,-75";

http.request(url, (response) => {});
