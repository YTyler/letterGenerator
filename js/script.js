$(document).ready(function() {
  $("#letterForm").submit(function(event) {
    var recipient = $("input#recipient").val();
    var address = $("input#address").val();
    var returnAddress = $("input#returnAddress").val();
    var content = $("input#content").val();
    var sender = $("input#sender").val();

    //Add Howler
    // content = content.toUpperCase();

    $(".recipient").text(recipient);
    $(".sender").text(sender);
    $(".content").text(content);
    $(".address").text(address);
    $(".returnAddress").text(returnAddress);
    $("#letter").show();
    event.preventDefault();
  });
});
