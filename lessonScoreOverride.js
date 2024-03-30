(() => {
    let num = prompt("What score to override all lessons to?")
    if (num == NaN) {alert("Not a valid number; defaulting to 100.");num = 100;}
    localStorage.lessonScoreOverride = num
    const _stringify = JSON.stringify;

    // override lessonOutcome score to be whatever is in localStorage
    JSON.stringify = function(body) {
        if (!localStorage.lessonScoreOverride) {localStorage.lessonScoreOverride = 100;}
        if (body.instructionLessonOutcome) {
            body.instructionLessonOutcome.score = localStorage.lessonScoreOverride;
        }

        return _stringify.apply(this, arguments);
    };
})();
