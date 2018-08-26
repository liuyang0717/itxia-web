var $http = require('../src/utils/axios');

var target = {
  method: 'post',
  url: '/customer/login',
  data: JSON.stringify({
    'phone': '15996230789'
  })
};

$http(target, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
})
