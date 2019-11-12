var playerMaster = JSON.parse(localStorage.getItem('playerMaster'));
var nowUserEmail = localStorage.getItem("nowUserEmail");
var myQuizType = localStorage.getItem("myQuizType");

// quiz Json
if (myQuizType == "evaluasi1") {

    var questions = [{
        question: "Tag untuk mendefinisikan html5 dan Tag paling awal dari HTML, adalah?",
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
        choices: ["&lt;head&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;h1&gt;", "&lt;h100&gt;"],
        correctAnswer: 3
    }, {
        question: "Tag links mana yang benar untuk membuat hyperlink?",
        choices: ["&lt;a href= 'https://google.com'&gt;", "&lt;a name= 'https://google.com'&gt;", "&lt;a link= 'https://google.com'&gt;", "&lt;a id= 'https://google.com'&gt;", "&lt;a url= 'https://google.com'&gt;"],
        correctAnswer: 0
    }, {
        question: "Tag links mana yang benar untuk memasukan gambar?",
        choices: ['&lt;img src="image.gif"&gt;', '&lt;image src="image.gif"&gt;', '&lt;img href="image.gif"&gt;', '&lt;img alt="image.gif"&gt;', '&lt;image href="image.gif"&gt;'],
        correctAnswer: 0
    }, {
        question: "Tag komentar di awali dengan <!-- dan diakhiri dengan -->",
        choices: ["Salah", "Benar", "Bisa jadi", "Semua Benar", "Semua Salah"],
        correctAnswer: 1
    }, {
        question: "Tag html apa yang mendifinisikan title dari sebuah dokumen?",
        choices: ["&lt;head&gt;", "&lt;meta&gt;", "&lt;title&gt;", "&lt;header&gt;", "&lt;nav&gt;"],
        correctAnswer: 2
    }, {
        question: "Jika gambar tidak bisa ditampilkan, atribut HTML mana yang spesifik untuk alternatif teks?",
        choices: ["title", "href", "src", "alt", "teks"],
        correctAnswer: 3
    }, {
        question: "Tag ini umumnya berisi berbagai definisi halaman seperti kode CSS, Javascript, meta dan lainnya. Tag apakah ini?",
        choices: ["&lt;script&gt;", "&lt;!DOCTYPE html&gt;", "&lt;body&gt;", "&lt;html&gt;", "&lt;head&gt;"],
        correctAnswer: 4
    }, {
        question: "Pada Versi HTML1, hanya mampu menambahkan gambar sebanyak?",
        choices: ["satu atau dua", "puluhan", "ratusan", "ribuan", "tak terhingga"],
        correctAnswer: 0
    }, {
        question: "Apakah HTML bahasa pemrograman?",
        choices: ["Benar", "Salah", "Bisa Jadi", "Semua Benar", "Semua Salah"],
        correctAnswer: 1
    }, {
        question: "Sampai saat ini (2019) versi html mana yang terbaru?",
        choices: ["HTML3", "HTML4", "HTML5", "XHTML", "HTML v.Alpha"],
        correctAnswer: 2
    }, {
        question: "Tag di HTML biasanya berpasangan, tag pertama biasa disebut?",
        choices: ["door tag", "window tag", "one tag", "start tag", "end tag"],
        correctAnswer: 3
    }, {
        question: "Berikut 4 fitur terbaru dari HTML5, kecuali?",
        choices: ["Video", "Audio", "Canvas", "Footer", "Fan"],
        correctAnswer: 4
    }, ];

} else {

    var questions = [{
        question: "404 NOT FOUND?",
        choices: ["404 NOT FOUND", "404 NOT FOUND", "404 NOT FOUND", "404 NOT FOUND"],
        correctAnswer: 1
    }, {
        question: "404 NOT FOUND?",
        choices: ["404 NOT FOUND", "404 NOT FOUND", "404 NOT FOUND", "404 NOT FOUND"],
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
    if (myQuizType == "evaluasi1") {
        document.getElementById("quizTitle").firstChild.nodeValue = "Evaluasi 1";
    } else {
        document.getElementById("quizTitle").firstChild.nodeValue = "Evaluasi 2";
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