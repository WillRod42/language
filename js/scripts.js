$(document).ready(function() {
  $("#next").click(function() {
    const currQuestion = $(".current-question");
    const nextQuestion = currQuestion.next(".question-group");

    if (nextQuestion.length !== 0) {
      currQuestion.css("position", "absolute");

      currQuestion.animate({
        "left": "-=100%"
      }, 1000, function() {
        currQuestion.removeClass("current-question");
        currQuestion.addClass("hidden");
        currQuestion.css("position", "initial");
        currQuestion.css("left", "");
      });

      nextQuestion.css("left", "+=100%");
      nextQuestion.css("position", "absolute");
      nextQuestion.css("opacity", "0");
      nextQuestion.addClass("current-question");
      nextQuestion.removeClass("hidden");

      nextQuestion.animate({
        "left": "25%",
        opacity: "1"
      }, 1000, function() {
        nextQuestion.css("right", "");
        nextQuestion.css("position", "initial");
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
      currQuestion.addClass("hidden");

      prevQuestion.addClass("current-question");
      prevQuestion.removeClass("hidden");

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

    $(this).addClass("hidden");
    $("#prev").addClass("hidden");
    $("#submit").addClass("hidden");

    $("#response h2").text(answer);
    $("#response").removeClass("hidden");
  });

  $("#submit").click(function() {
    $("form").trigger("submit");
  });

  $("#retake").click(function() {
    $("#response").addClass("hidden");
    $("form").removeClass("hidden");
    $("#next").removeClass("hidden");
    $("#sound").addClass("hidden");
    $("#sound").removeClass("current-question");
    $("#learn").addClass("current-question");
    $("#learn").removeClass("hidden");

    $("input").val("");
    $("select").val("");
  });
});