var quiz = {
    question: "apple?",
    answer: "사과"
};

function showquiz() {
    var userAnswer = prompt(quiz.question);
    if (userAnswer !== null) {
        checkanswer(userAnswer);
    }
}

function checkanswer(userAnswer) {
    if (userAnswer.toLowerCase() == quiz.answer.toLowerCase()) {
        alert("정답!");
    } else {
        alert("땡! 정답 = " + quiz.answer );
    }
}