$(document).ready(function() {
  $("#letterForm").submit(function() {
    var recipient = $("input#recipent").val();
    var address = $("input#address").val();
    var returnAddress = $("input#returnAddress").val();
    var content = $("input#content").val();
    var sender = $("input#sender").val();

    $(".recipent").text(recipent);
    $(".sender").text(sender);
    $(".content").text(content);
    $(".address").text(address);
    $(".returnAddress").text(returnAddress);
    $("#letter").show();
    // event.preventDefault();
  });
});
