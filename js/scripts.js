$(document).ready(function () {
    $("#design-icon").on("click", function () {
        $("#design-para").show();
    $("#design-para").on("click", function () {
        $("#design-icon").hide();
        });
    });
});