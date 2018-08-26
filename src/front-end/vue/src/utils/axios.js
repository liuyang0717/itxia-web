var axios = require('axios');

var $http = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

var httpMethod = function (target, callback) {
  $http(target)
  .then(response => {
    callback(null, response);
  })
  .catch(error => {
    callback(error);
  })
};

exports = module.exports = httpMethod;
