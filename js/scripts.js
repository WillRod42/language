$(document).ready(function() {
  $("#next").click(function() {
    const currQuestion = $(".current-question");
    const nextQuestion = currQuestion.next(".question-group");

    if (nextQuestion.length !== 0) {
      currQuestion.removeClass("current-question");
      currQuestion.addClass("hidden");

      nextQuestion.addClass("current-question");
      nextQuestion.removeClass("hidden");

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
  });
});