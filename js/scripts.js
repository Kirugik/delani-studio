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
        $("#project1").fadeTo("slow", 0.3);
        $("#project-one").show();
      });
    $("#project1").mouseout(function(){
        $("#project-one").hide();
        $("#project1").fadeTo("slow", 1);
    });
});

//portfolio project 2
$(document).ready(function () {
    $("#project2").mouseover(function(){
        $("#project2").fadeTo("slow", 0.3);
        $("#project-two").show();
      });
    $("#project2").mouseout(function(){
        $("#project-two").hide();
        $("#project2").fadeTo("slow", 1);
    });
});

//portfolio project 3
$(document).ready(function () {
    $("#project3").mouseover(function(){
        $("#project3").fadeTo("slow", 0.3);
        $("#project-three").show();
      });
    $("#project3").mouseout(function(){
        $("#project-three").hide();
        $("#project3").fadeTo("slow", 1);
    });
});

//portfolio project 4
$(document).ready(function () {
    $("#project4").mouseover(function(){
        $("#project4").fadeTo("slow", 0.3);
        $("#project-four").show();
      });
    $("#project4").mouseout(function(){
        $("#project-four").hide();
        $("#project4").fadeTo("slow", 1);
    });
});

//portfolio project 5
$(document).ready(function () {
    $("#project5").mouseover(function(){
        $("#project5").fadeTo("slow", 0.3);
        $("#project-five").show();
      });
    $("#project5").mouseout(function(){
        $("#project-five").hide();
        $("#project5").fadeTo("slow", 1);
    });
});

//portfolio project 6
$(document).ready(function () {
    $("#project6").mouseover(function(){
        $("#project6").fadeTo("slow", 0.3);
        $("#project-six").show();
      });
    $("#project6").mouseout(function(){
        $("#project-six").hide();
        $("#project6").fadeTo("slow", 1);
    });
});

//portfolio project 7
$(document).ready(function () {
    $("#project7").mouseover(function(){
        $("#project7").fadeTo("slow", 0.3);
        $("#project-seven").show();
      });
    $("#project7").mouseout(function(){
        $("#project-seven").hide();
        $("#project7").fadeTo("slow", 1);
    });
});

//portfolio project 8
$(document).ready(function () {
    $("#project8").mouseover(function(){
        $("#project8").fadeTo("slow", 0.3);
        $("#project-eight").show();
      });
    $("#project8").mouseout(function(){
        $("#project-eight").hide();
        $("#project8").fadeTo("slow", 1);
    });
});


//User alert message on submitting contact form
$(document).ready(function () {
    $("form#contact-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var message = $("#text-area").val();

        var display = document.getElementById("display");

        if ($("#name-input").val() && $("#email-input").val() && ($("#text-area").val() !== "")) {
            display.innerHTML =`<p> ${name}, your message has been received. Thankyou for contacting us.</p>` 
        }
        else {
            display.innerHTML =`<p>Error! Name, email, and/or textarea fields cannot be empty.</p>`
        }
    });
});

