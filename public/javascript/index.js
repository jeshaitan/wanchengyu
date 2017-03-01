//fill in the 成語 of the day
$.ajax({
  url: "/oftheday",
  complete: function(data) {
    var chengyu = data.responseJSON[0];
    $("#daily").html("<div id=\"card_chinese\">"+chengyu.chinese+"<div><br />"
                   + "<div id=\"card_english\"><span id=\"type\">意思:</span> "+chengyu.english_list[0]+"<div><br />"
                   + "<div id=\"card_sentence\"><span id=\"type\">例句:</span> "+chengyu.sentence_list[0]+"</div>");
   }
});
