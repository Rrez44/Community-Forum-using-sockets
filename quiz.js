var modal = document.getElementById("quizModal");
var quizContent = document.getElementById("quizContent");

const quizzes = {
    'ueb':{
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "Which tag is used to create a hyperlink in HTML?",
                options: ["a", "link", "href"],
                answer: "a"
            },
            {
                question: "Which attribute is used to define inline styles in HTML?",
                options: ["style", "class", "font"],
                answer: "style"
            },
            {
                question: "What does the HTML 'canvas' element do?",
                options: ["Displays an image", "Creates graphics and visual images dynamically", "Defines a section in a document"],
                answer: "Creates graphics and visual images dynamically"
            },
            {
                question: "What is the purpose of the HTML 'meta' tag?",
                options: ["Defines metadata about an HTML document", "Creates a table in HTML", "Includes an image on a webpage"],
                answer: "Defines metadata about an HTML document"
            },
            {
                question: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
                answer: "Cascading Style Sheets"
            },
            {
                question: "How can you include an external CSS file in an HTML document?",
                options: ["style", "link", "css"],
                answer: "link"
            },
            {
                question: "Which property is used to change the text color in CSS?",
                options: ["text-color", "color", "text-style"],
                answer: "color"
            },
            {
                question: "What does the 'z-index' property in CSS control?",
                options: ["Text size", "Element's stacking order", "Element's width"],
                answer: "Element's stacking order"
            },
            {
                question: "What does the CSS 'display: inline-block' do?",
                options: ["Makes an element a block-level element", "Makes an element inline and maintains its block layout", "Makes an element hidden"],
                answer: "Makes an element inline and maintains its block layout"
            },
            {
                question: "What is the purpose of JavaScript in web development?",
                options: ["To style web pages", "To add interactivity and behavior to web pages", "To create database structures"],
                answer: "To add interactivity and behavior to web pages"
            },
            {
                question: "Which function is used to print something in the console in JavaScript?",
                options: ["console.print()", "print()", "console.log()"],
                answer: "console.log()"
            },
            {
                question: "What does the 'querySelector()' method in JavaScript do?",
                options: ["Selects the first element that matches a specified CSS selector", "Selects all elements that match a specified CSS selector", "Selects the last element that matches a specified CSS selector"],
                answer: "Selects the first element that matches a specified CSS selector"
            },
            {
                question: "What is the purpose of 'localStorage' in JavaScript?",
                options: ["To store data temporarily for a session", "To permanently store data on the server", "To manipulate HTML elements"],
                answer: "To store data temporarily for a session"
            },
            {
                question: "Which operator is used for strict equality in JavaScript?",
                options: ["==", "===", "=", "!"],
                answer: "==="
            }
        ]
    },
    'elektronik': {
            questions: [
                {
                    question: "What is the main function of a transistor?",
                    options: ["To disconnect voltage flow", "To create electrical current", "To control the flow of voltage or current"],
                    answer: "To control the flow of voltage or current"
                },
                {
                    question: "How many basic types of transistors are there?",
                    options: ["One", "Two", "Three"],
                    answer: "Three"
                },
                {
                    question: "What types of transistors exist based on its polarization?",
                    options: ["NPN and PNP", "NN and PP", "NP and PN"],
                    answer: "NPN and PNP"
                },
                {
                    question: "How do NPN and PNP bipolar transistors function?",
                    options: ["They don’t have polarized parts", "They have two interconnected diodes", "They have a semiconductor zone"],
                    answer: "They have two interconnected diodes"
                },
                {
                    question: "How are the base, collector, and emitter involved in a bipolar transistor?",
                    options: ["Base receives electrons, emitter releases them, and collector gathers them", "Emitter receives electrons, collector releases them, and base controls them", "Collector receives electrons, base releases them, and emitter gathers them"],
                    answer: "Emitter receives electrons, collector releases them, and base controls them"
                },
                {
                    question: "What is the main purpose of the base resistance in a bipolar transistor?",
                    options: ["To reduce collector current", "To increase emitter current", "To reduce base current"],
                    answer: "To reduce base current"
                },
                {
                    question: "What is the characteristic of transistors in High Integration Transistor Logic (HTL)?",
                    options: ["They are small-sized transistors", "They are handheld transistors", "They are close to optical elements"],
                    answer: "They are small-sized transistors"
                },
                {
                    question: "What is one of the applications of transistors in today's technology?",
                    options: ["Electricity production", "Construction of buildings", "Usage in electronic devices like computers and smartphones"],
                    answer: "Usage in electronic devices like computers and smartphones"
                },
                {
                    question: "How does temperature affect a transistor's performance?",
                    options: ["No effect", "Increases performance", "Decreases performance"],
                    answer: "Decreases performance"
                },
                {
                    question: "Which one has the greatest impact on the usage potential in a transistor?",
                    options: ["Collector", "Base", "Emitter"],
                    answer: "Base"
                },
                {
                    question: "How can a transistor be accelerated?",
                    options: ["By increasing temperature", "By increasing voltage at the base", "By using performance enhancement techniques"],
                    answer: "By increasing voltage at the base"
                },
                {
                    question: "What is the transistor effect?",
                    options: ["A phenomenon related to transistor's thermal characteristics", "An impact on transistor performance at high frequencies", "A phenomenon related to increased transistor performance"],
                    answer: "An impact on transistor performance at high frequencies"
                },
                {
                    question: "How do higher frequencies affect transistor performance?",
                    options: ["Increase performance", "Decrease performance", "No effect"],
                    answer: "Decrease performance"
                },
                {
                    question: "What is the main difference between bipolar transistors and FET transistors?",
                    options: ["Materials used in construction", "Number of electrodes", "Their usage in different fields of electronic applications"],
                    answer: "Materials used in construction"
                },
                {
                    question: "What is the function of the collector in a bipolar transistor?",
                    options: ["To emit electrons", "To control the flow of electrons", "To gather electrons"],
                    answer: "To gather electrons"
                },
                {
                    question: "Who invented the first transistor?",
                    options: ["William Shockley, John Bardeen, and Walter Brattain", "Nikola Tesla", "Thomas Edison"],
                    answer: "William Shockley, John Bardeen, and Walter Brattain"
                }
        ]
    }
};
var userAnswers = [];

function loadQuizContent(selectedQuizId) {
    quizId = selectedQuizId; // Assign selectedQuizId to quizId
    var currentQuestion = 0;

    function showQuestion(index) {
        var totalQuestions = quizzes[quizId].questions.length;
        var question = quizzes[quizId].questions[index];
        var questionHTML = "<div class='modal-header'>Question " + (index + 1) + " of " + totalQuestions + "</div>";
        questionHTML += "<div class='quiz-question'>" + question.question + "</div>";

        questionHTML += "<div class='quiz-options'>";
        question.options.forEach(function (option, i) {
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

    window.nextQuestion = function () {
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
    var correctAnswers = quizzes[quizId].questions.map(q => q.answer);
    var score = userAnswers.reduce((total, answer, index) => {
        return total + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);

    quizContent.innerHTML += "<p>Your score: " + score + "/" + correctAnswers.length + "</p>";
}

document.querySelectorAll('.card-button').forEach(function (button) {
    button.onclick = function () {
        quizId = this.getAttribute("data-quiz");
        loadQuizContent(quizId);
        modal.style.display = "block";
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
