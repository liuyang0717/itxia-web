$(document).ready($("#sidebar-content").hide());

$("#sidebar-tab").click(function() {
  if ($("#sidebar-content").is(":hidden")) {
    $("#sidebar-content").show();
  } else {
    $("#sidebar-content").hide();
  }
});

function acceptAppointment(appointmentId) {
  var jsonData = {
    "appointmentId": appointmentId
  };
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/admin/acceptAppointment",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(jsonData),
    dataType: "text",
    xhrFields: {
      withCredentials: true
    },
    success: function(res) {
      console.log(res);
      window.location.reload();
    },
    error: function(err) {
      console.log(err)
    }
  })
}

function reply(appointmentId) {
  var jsonData = {
    "appointmentId": appointmentId,
    "content": $('#content'+appointmentId).val()
  };
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/admin/reply",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(jsonData),
    dataType: "text",
    xhrFields: {
      withCredentials: true
    },
    success: function(res) {
      console.log(res);
      window.location.reload();
    },
    error: function(err) {
      console.log(err)
    }
  })
}
