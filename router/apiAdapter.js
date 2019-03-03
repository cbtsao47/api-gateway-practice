const axios = require("axios");
//uses axios.create to create an instance o
module.exports = baseURL => {
  return axios.create({ baseURL });
};

// what axios.create do
// var instance = axios.create({
//   baseURL: "https://some-domain.com/api/",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" }
// });
