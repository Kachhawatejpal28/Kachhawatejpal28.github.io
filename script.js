function checkAnswer(correctAnswer, nextPage) {
    let userAnswer = document.getElementById("answer").value.trim().toLowerCase();

    if (userAnswer === correctAnswer.toLowerCase()) {
        alert("Correct Answer! 🎉");
        window.location.href = nextPage;
    } else {
        alert("Wrong Answer! Try Again ❌");
    }
}
