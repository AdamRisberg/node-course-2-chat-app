var socket = io();
var roomSelect = jQuery("#room-select");

socket.on("connect", function() {
  socket.emit("getRooms", function(rooms) {
    var roomSelectDiv = jQuery("#room-select-div");

    if(rooms.length > 0) {
      rooms.forEach(function (room) {
        var option = jQuery("<option></option>");
        option.text(room);
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