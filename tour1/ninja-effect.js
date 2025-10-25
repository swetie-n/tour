$(document).ready(function() {
  $(".mota").hide();
  $(".ten").click(function() {
    $(this).next(".mota").slideToggle(500);
  });
});