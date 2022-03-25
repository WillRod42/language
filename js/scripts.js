$(document).ready(function() {
  $("#next").click(function() {
    const currQuestion = $(".current-question");
    const nextQuestion = currQuestion.next(".question-group");

    if (nextQuestion.length !== 0) {
      currQuestion.slideUp(function() {
        nextQuestion.slideDown(function() {
          nextQuestion.addClass("current-question");
          currQuestion.removeClass("current-question");
        });
      });

      if (nextQuestion.next(".question-group").length === 0) {
        $("#next").addClass("hidden");
        $("#submit").removeClass("hidden");
      } else {
        $("#prev").removeClass("hidden");
        $("#submit").addClass("hidden");
      }
    }
  });

  $("#prev").click(function() {
    const currQuestion = $(".current-question");
    const prevQuestion = currQuestion.prev(".question-group");

    if (prevQuestion.length !== 0) {
      currQuestion.removeClass("current-question");
      prevQuestion.addClass("current-question");

      currQuestion.slideUp(function() {
        prevQuestion.slideDown(function() {
          prevQuestion.addClass("current-question");
          currQuestion.removeClass("current-question");
        });
      });

      if (prevQuestion.prev(".question-group").length === 0) {
        $("#prev").addClass("hidden");
      } else {
        $("#next").removeClass("hidden");
        $("#submit").addClass("hidden");
      }
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    
    const learn = parseInt($("#learn input").val());
    const time = parseInt($("#time input").val());
    const language = $("#language select").val();
    const color = $("#color select").val();
    const number = parseInt($("#number input").val());
    const airspeed = $("#airspeed select").val();
    const sound = $("#sound select").val();

    let answer = "";
    if (learn < 5) {
      if (color === "Grey") {
        if (airspeed === "11") {
          answer = "Go";
        } else if (airspeed === "kind") {
          answer = "Python";
        } else {
          answer = "C#";
        }
      } else {
        if (sound === "1") {
          answer = "C#";
        } else if (sound === "2") {
          answer = "JavaScript";
        } else {
          answer = "Python";
        }
      }
    } else {
      if (time < 5) {
        if (number === 72432944391) {
          answer = "Go";
        } else if (number < 100000000000 && number > 43000000000) {
          answer = "C#";
        } else if (number % 2 === 0) {
          answer = "Python";
        } else {
          answer = "JavaScript";
        }
      } else {
        answer = language;
      }
    }

    $("#response h2").text(answer);
    $("#response").removeClass("hidden");
  });

  $("#submit").click(function() {
    $("form").trigger("submit");

    $("#submit").prop("disabled", true);
    $("#prev").prop("disabled", true);

    $("#sound").slideUp();
    $("form").slideUp(function() {
      $("#response").slideDown();
    });
  });

  $("#retake").click(function() {
    $("#learn").addClass("current-question");
    $("#sound").removeClass("current-question");
    $("#submit").addClass("hidden");
    $("#next").removeClass("hidden")
    $("#prev").addClass("hidden");
    $("#submit").prop("disabled", false);
    $("#prev").prop("disabled", false);

    $("#response").slideUp(function() {
      $("form").slideDown();
      $("#learn").slideDown();
    });
  });
});