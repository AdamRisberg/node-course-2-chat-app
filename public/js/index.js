var socket = io();
var roomSelect = jQuery("#room-select");

socket.on("connect", function() {
  socket.emit("getRooms", function(users) {
    var roomSelectDiv = jQuery("#room-select-div");

    if (users.length > 0) {
      users.forEach(function (user) {
        var option = jQuery("<option></option>");
        option.text(user.room);
        roomSelect.append(option);
      });
      roomSelectDiv.show();
    } else {
      roomSelectDiv.hide();
    }
  });
});

roomSelect.change(function() {
  jQuery("input[name='room']").val($(this).val());
});