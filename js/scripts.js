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


//portfolio section hover effects 
//portfolio project 1
$(document).ready(function () {
    $("#project1").mouseover(function(){
        $("#project1").fadeTo('slow', 0.2);
        $("#project-one").show();
      });
    $("#project1").mouseout(function(){
        $("#project-one").hide();
    });
});

//portfolio project 2
$(document).ready(function () {
    $("#project2").mouseover(function(){
        $("#project2").fadeTo('slow', 0.2);
        $("#project-two").show();
      });
    $("#project2").mouseout(function(){
        $("#project-two").hide();
    });
});

//portfolio project 3
$(document).ready(function () {
    $("#project3").mouseover(function(){
        $("#project3").fadeTo('slow', 0.2);
        $("#project-three").show();
      });
    $("#project3").mouseout(function(){
        $("#project-three").hide();
    });
});

//portfolio project 4
$(document).ready(function () {
    $("#project4").mouseover(function(){
        $("#project4").fadeTo('slow', 0.2);
        $("#project-four").show();
      });
    $("#project4").mouseout(function(){
        $("#project-four").hide();
    });
});

//portfolio project 5
$(document).ready(function () {
    $("#project5").mouseover(function(){
        $("#project5").fadeTo('slow', 0.2);
        $("#project-five").show();
      });
    $("#project5").mouseout(function(){
        $("#project-five").hide();
    });
});

//portfolio project 6
$(document).ready(function () {
    $("#project6").mouseover(function(){
        $("#project6").fadeTo('slow', 0.2);
        $("#project-six").show();
      });
    $("#project6").mouseout(function(){
        $("#project-six").hide();
    });
});

//portfolio project 7
$(document).ready(function () {
    $("#project7").mouseover(function(){
        $("#project7").fadeTo('slow', 0.2);
        $("#project-seven").show();
      });
    $("#project7").mouseout(function(){
        $("#project-seven").hide();
    });
});

//portfolio project 8
$(document).ready(function () {
    $("#project8").mouseover(function(){
        $("#project8").fadeTo('slow', 0.2);
        $("#project-eight").show();
      });
    $("#project8").mouseout(function(){
        $("#project-eight").hide();
    });
});


//Contact form message alert on submit 
$(document).ready(function () {
    $("form#contact-form").submit(function (event) {
        event.preventDefault();
        let name = $("#name-input").val();
        let email = $("#email-input").val();
        let message = $("#text-area").val();

        if ($("#name-input").val() && $("#email-input").val()) {
            alert(name + "your message is sent.");
        }
        else {
            alert("You must enter your name and email address.");
        }
    });
});

