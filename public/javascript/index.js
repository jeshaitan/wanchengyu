//fill in the 成語 of the day
$.ajax({
  url: "/oftheday",
  complete: function(data) {
    $("#daily").html("hi!");
   }
});
