const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const data_buffer = fs.readFileSync("1-json.json");
const file_data = data_buffer.toString();
const JSON_data = JSON.parse(file_data);
JSON_data.name = "Isa";
JSON_data.age = 65;

const data = JSON.stringify(JSON_data);
// fs.writeFileSync("1-json.json", data);
console.log(data);
