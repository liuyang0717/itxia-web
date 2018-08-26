$(document).ready($("#adminHead").hide());

$("#customerTab").click(function() {
  $("#customerHead").show();
  $("#adminHead").hide();
});

$("#adminTab").click(function () {
  $("#customerHead").hide();
  $("#adminHead").show();
});

function customerLogin() {
  var jsonData = {
    "phone": $("#inputPhone").val()
  };
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/customer/login",
    contentType: "application/json",
    data: JSON.stringify(jsonData),
    dataType: "text",
    xhrFields: {
      withCredentials: true
    },
    success: function(res) {
      console.log(res);
      window.location.href="http://localhost:8080/appoint-system/appointment.html";
    },
    error: function(err) {
      console.log(err);
    }
  })
}

function adminLogin() {
  var jsonData = {
    "username": $("#inputAccount").val(),
    "password": $("#inputPassword").val()
  };
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/admin/login",
    contentType: "application/json",
    data: JSON.stringify(jsonData),
    dataType: "text",
    xhrFields: {
      withCredentials: true
    },
    success: function(res) {
      console.log(res);
      window.location.href = "http://localhost:8080/appoint-system/admin.html";
    },
    error: function(err) {
      console.log(err);
    }
  })
}
