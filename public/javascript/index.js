//fill in the 成語 of the day
$.ajax({
  url: "/oftheday",
  complete: function(data) {
    var chengyu = data.responseJSON[0];
    $("#daily").html("<div id=\"card_chinese\">"+chengyu.chinese+"<div><br />"
                   + "<div id=\"card_sentence\">"+chengyu.sentence_list[0]+"</div>");
   }
});
