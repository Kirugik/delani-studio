$(document).ready(function () {
    // design section
    $("#design-icon").on("click", function () {
        $("#design-para").show();
        $("#design-icon").hide(); 
    $("#design-para").on("click", function () {
        $("#design-icon").show();
        $("#design-para").hide(); 
        });
    });

    // development section
    $("#development-icon").on("click", function () {
        $("#development-para").show();
        $("#development-icon").hide(); 
    $("#development-para").on("click", function () {
        $("#development-icon").show();
        $("#development-para").hide(); 
        });
    });

    // product management section
    $("#prod-icon").on("click", function () {
        $("#prod-para").show();
        $("#prod-icon").hide(); 
    $("#prod-para").on("click", function () {
        $("#prod-icon").show();
        $("#prod-para").hide(); 
        });
    });
});