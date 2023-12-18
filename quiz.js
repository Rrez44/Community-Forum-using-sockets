var modal = document.getElementById("quizModal");
var quizContent = document.getElementById("quizContent");

const quizzes = {
    'elektronik': {

        questions: [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin"],
                answer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
                answer: "William Shakespeare"
            }
        ]
    }

};
var userAnswers = []; 

function loadQuizContent(quizId) {
    var currentQuestion = 0;

    function showQuestion(index) {
        var totalQuestions = quizzes[quizId].questions.length;
        var question = quizzes[quizId].questions[index];
        var questionHTML = "<div class='modal-header'>Question " + (index + 1) + " of " + totalQuestions + "</div>";
        questionHTML += "<div class='quiz-question'>" + question.question + "</div>";
        
        questionHTML += "<div class='quiz-options'>";
        question.options.forEach(function(option, i) {
            questionHTML += `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${option}
                </label>`;
        });
        questionHTML += "</div>";
    
        questionHTML += "<button class='next-button' onclick='nextQuestion()'>Next</button>";
        quizContent.innerHTML = questionHTML;
    }

    window.nextQuestion = function() {
        var selectedOption = document.querySelector('input[name="answer"]:checked');
        userAnswers[currentQuestion] = selectedOption ? selectedOption.value : "";

        if (currentQuestion < quizzes[quizId].questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            quizContent.innerHTML = "<h2>End of the quiz!</h2>";
            checkAnswers();
        }
    };

    showQuestion(currentQuestion);
}

function checkAnswers() {
    var correctAnswers = quizzes['quiz1'].questions.map(q => q.answer);
    var score = userAnswers.reduce((total, answer, index) => {
        return total + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);

    quizContent.innerHTML += "<p>Your score: " + score + "/" + correctAnswers.length + "</p>";
}

document.querySelectorAll('.card-button').forEach(function(button) {
    button.onclick = function() {
        var quizId = this.getAttribute("data-quiz");
        loadQuizContent(quizId);
        modal.style.display = "block";
    }
});


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}