function appointment() {
  var jsonData = {
    "name": $("#inputName").val(),
    "email": $("#inputEmail").val(),
    "campus": "鼓楼",
    "deviceVersion": $("#inputModel").val(),
    "systemVersion": $("#inputOS").val(),
    "description": $("#inputDesc").val()
  };
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/customer/appointment",
    contentType: "application/json",
    data: JSON.stringify(jsonData),
    dataType: "text",
    xhrFields: {
      withCredentials: true
    },
    success: function(res) {
      console.log(res);
    },
    error: function(err) {
      console.log(err);
    }
  })
}
