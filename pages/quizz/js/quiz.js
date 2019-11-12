var playerMaster = JSON.parse(localStorage.getItem('playerMaster'));
var nowUserEmail = localStorage.getItem("nowUserEmail");
var myQuizType = localStorage.getItem("myQuizType");

// quiz Json
if (myQuizType == "countryQuiz") {

    var questions = [{
        question: "Tag paling awal dari HTML adalah?",
        choices: ["Tag html", "Tag head", "DTD/Doctype", "Tag body", "Tag start"],
        correctAnswer: 2
    }, {
        question: "Antara tag pembuka dan penutup biasanya dibedakan oleh tanda?",
        choices: ["backslash", "forwardslash", "underscore", "apostrof", "backtick"],
        correctAnswer: 1
    }, {
        question: "HTML adalah singkatan dari?",
        choices: ["Hyperlink and Text Markup Language", "Hyper Text Markdown Language", "Hyperlink and Text Markdown Language", "Hyper Tool Markup Language", "Hyper Text Markup Language"],
        correctAnswer: 4
    }, {
        question: "Tag heading manakah yang paling penting?",
        choices: ["<head>", "<h6>", "<heading>", "<h1>", "<h100>"],
        correctAnswer: 3
    }, {
        question: "Tag links mana yang benar untuk membuat hyperlink?",
        choices: ["a href='https://google.com'", "a name='https://google.com'", "a link='https://google.com'", "a id='https://google.com'", "a url='https://google.com'"],
        correctAnswer: 0
    }, {
        question: "Tag links mana yang benar untuk memasukan gambar?",
        choices: ['img src="image.gif"', 'image src="image.gif"', 'img href="image.gif"', 'img alt="image.gif"', 'image href="image.gif"'],
        correctAnswer: 0
    }, {
        question: "Tag komentar di awali dengan <!-- dan diakhiri dengan -->",
        choices: ["Salah", "Benar", "Bisa jadi", "Semua Benar", "Semua Salah"],
        correctAnswer: 1
    }, {
        question: "Tag html apa yang mendifinisikan title dari sebuah dokumen?",
        choices: ["head", "meta", "title", "header", "nav"],
        correctAnswer: 2
    }, {
        question: "Which country is in Asia?",
        choices: ["Czech Republic", "Finland", "Iran", "Monaco"],
        correctAnswer: 2
    }, {
        question: "Which country is NOT in Asia?",
        choices: ["Cambodia", "Israel", "Canada", "Jordan"],
        correctAnswer: 2
    }, {
        question: "Which country is NOT in Asia?",
        choices: ["Malaysia", "Belgium", "Nepal", "North Korea"],
        correctAnswer: 1
    }, {
        question: "Which country is NOT in Asia?",
        choices: ["Thailand", "Vietnam", "Japan", "Austria"],
        correctAnswer: 3
    }, {
        question: "Which country is NOT in Europe?",
        choices: ["Vietnam", "Bulgaria", "Croatia", "Finland"],
        correctAnswer: 0
    }, {
        question: "Which country is NOT in Europe?",
        choices: ["France", "Greece", "Iceland", "United States"],
        correctAnswer: 3
    }, {
        question: "Which country is NOT in Europe?",
        choices: ["Ethiopia", "Norway", "Poland", "Portugal"],
        correctAnswer: 0
    }, {
        question: "Which country is NOT in North America?",
        choices: ["Canada", "Belgium", "Greenland", "Mexico"],
        correctAnswer: 1
    }, {
        question: "Which country is NOT in South America?",
        choices: ["Korea", "Colombia", "Bolivia", "Chile"],
        correctAnswer: 0
    }, {
        question: "Which country is in South America?",
        choices: ["Peru", "Belgium", "Canada", "Russia"],
        correctAnswer: 0
    }, {
        question: "Which country is in Europe?",
        choices: ["Cuba ", "Italy", "Canada", "Mexico"],
        correctAnswer: 1
    }, {
        question: "Which one is NOT country name?",
        choices: ["Marc", "Belgium", "Canada", "Bolivia"],
        correctAnswer: 0
    }];

} else {

    var questions = [{
        question: "Which city is the capital of Canada?",
        choices: ["Toronto", "Ottawa", "Washington DC", "Areum"],
        correctAnswer: 1
    }, {
        question: "Which city is the capital of Brazil?",
        choices: ["Brasília", "Toronto", "Andrea", "Lima"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Turkey?",
        choices: ["Ankara", "Bratislava", "Lisbon", "Istanbul"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Switzerland?",
        choices: ["Interaken", "Berlin", "Paris", "Bern"],
        correctAnswer: 3
    }, {
        question: "Which city is the capital of South Korea?",
        choices: ["Seoul", "Pyongyang", "Tokyo", "Manila"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Cuba?",
        choices: ["Havana", "Guatemala", "Tegucigalpa", "Managua"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Bolivia?",
        choices: ["Ethiopia", "Paramaribo", "Bolivia", "La Paz"],
        correctAnswer: 3
    }, {
        question: "Which city is the capital of Zambia?",
        choices: ["Harare", "Thimphu", "Lusaka", "Beijing"],
        correctAnswer: 2
    }, {
        question: "Which city is the capital of China?",
        choices: ["Thimphu", "Belgium", "Beijing", "Lusaka"],
        correctAnswer: 2
    }, {
        question: "Which city is the capital of Russia?",
        choices: ["Moscow", "Ankara", "Vienna", "Toronto"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Greece?",
        choices: ["Vilnius", "Pape", "Rome", "Athens"],
        correctAnswer: 3
    }, {
        question: "Which city is the capital of Germany?",
        choices: ["Dublin", "Berlin", "Prague", "Brussels"],
        correctAnswer: 1
    }, {
        question: "Which city is the capital of Monaco?",
        choices: ["Moscow", "Stockholm", "Monaco", "London"],
        correctAnswer: 2
    }, {
        question: "Which city is the capital of United Kingdom?",
        choices: ["London", "Stockholm", "Berlin", "Prague"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Sweden?",
        choices: ["Monaco", "Stockholm", "Vilnius", "Rome"],
        correctAnswer: 1
    }, {
        question: "Which city is the capital of United States?",
        choices: ["Washington AC", "Washington BC", "Washington CC", "Washington DC"],
        correctAnswer: 3
    }, {
        question: "Which city is the capital of Iran?",
        choices: ["Tehran", "Rome", "Astana", "Tokyo"],
        correctAnswer: 0
    }, {
        question: "Which city is the capital of Philippines?",
        choices: ["Prague", "Manila", "Stockholm", "London"],
        correctAnswer: 1
    }, {
        question: "Which city is the capital of Vietnam?",
        choices: ["Pho", "Hanoi", "Sofia", "Bern"],
        correctAnswer: 1
    }, {
        question: "Which city is the capital of Chile?",
        choices: ["Santiago", "Wine", "Georgetown", "Caracas"],
        correctAnswer: 0
    }];

}

// randomly order
questions.sort(function (a, b) {
    return 0.5 - Math.random()
});

var currentQuestion = 0;
var correctAnswers = 0;
var questionNumber = 1;

$(document).ready(function () {

    // show question
    showCurrentQuestion();

    // control next button
    $(this).find(".nextButton").on("click", function () {

        value = $("input[type='radio']:checked").val();

        // player doesn't select radio button
        if (value == undefined) {
            alert("Please select the answer!")
        } else {
            // check player answer if it is right or wrong
            if (value == questions[currentQuestion].correctAnswer) {
                correctAnswers++;
            }

            questionNumber++;
            currentQuestion++;

            // player can play only 10 questions per 1 quiz
            if (currentQuestion < 10) {
                showCurrentQuestion();
            } else {
                // store quiz information that player played
                localStorage.setItem("myQuizType", myQuizType);
                localStorage.setItem("MyCorrectAnswers", correctAnswers);
                document.getElementById("quizForm").submit();

            }

        }

    });

});

// show question in html page
function showCurrentQuestion() {

    var myQuizType = localStorage.getItem("myQuizType");
    if (myQuizType == "countryQuiz") {
        document.getElementById("quizTitle").firstChild.nodeValue = "Country Quiz";
    } else {
        document.getElementById("quizTitle").firstChild.nodeValue = "Capital Quiz";
    }

    var question = questions[currentQuestion].question;
    var choiceSize = questions[currentQuestion].choices.length;
    var questionState = $(document).find(".quizContainer  .question");
    var choiceList = $(document).find(".quizContainer  .choiceList");

    $(questionState).text(questionNumber + ". " + question);
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < choiceSize; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input class="form-check-input" type="radio" value=' + i + ' id=' + i + ' name="choiceRadio" />' + '<label for=' + i + ' class="form-check-label">' + choice + '</label></li>').appendTo(choiceList);
    }
}