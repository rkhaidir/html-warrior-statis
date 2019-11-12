let a, b, c, d, e, f, g, h, i, j, k = "";

function funDoc() {
    input = document.getElementById("doc").value;
    if (input == "<!DOCTYPE html>") {
        document.getElementById("doc").style = "border: 5px solid green;";
        a = true;
    } else {
        document.getElementById("doc").style = "border: 5px solid red;";
        a = false;
    }

    if (a == true && b == true && c == true && d == true) {
        document.getElementById("docFbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("docFbs").hidden = false;
        document.getElementById("docFbd").hidden = true;
    }
}

function funHtml() {
    inputHtml = document.getElementById("html").value;
    if (inputHtml == "</html>") {
        document.getElementById("html").style = "border: 5px solid green;";
        b = true;
    } else {
        document.getElementById("html").style = "border: 5px solid red;";
        b = false;
    }

    if (a == true && b == true && c == true && d == true) {
        document.getElementById("docFbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("docFbs").hidden = false;
        document.getElementById("docFbd").hidden = true;
    }
}

function funBody() {
    input = document.getElementById("body").value;
    if (input == "<body>") {
        document.getElementById("body").style = "border: 5px solid green;";
        c = true;
    } else {
        document.getElementById("body").style = "border: 5px solid red;";
        c = false;
    }

    if (a == true && b == true && c == true && d == true) {
        document.getElementById("docFbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("docFbs").hidden = false;
        document.getElementById("docFbd").hidden = true;
    }
}

function funTitle() {
    input = document.getElementById("title").value;
    if (input == "<title>") {
        document.getElementById("title").style = "border: 5px solid green;";
        d = true;
    } else {
        document.getElementById("title").style = "border: 5px solid red;";
        d = false;
    }

    if (a == true && b == true && c == true && d == true) {
        document.getElementById("docFbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("docFbs").hidden = false;
        document.getElementById("docFbd").hidden = true;
    }
}

// Latihan 2
function funKom1() {
    input = document.getElementById("kom1").value;
    if (input == "<!--") {
        document.getElementById("kom1").style = "border: 5px solid green;";
        e = true;
    } else {
        document.getElementById("kom1").style = "border: 5px solid red;";
        e = false;
    }

    if (e == true && f == true && g == true && h == true) {
        document.getElementById("doc2Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc2Fbs").hidden = false;
        document.getElementById("doc2Fbd").hidden = true;
    }
}

function funKom2() {
    input = document.getElementById("kom2").value;
    if (input == "-->") {
        document.getElementById("kom2").style = "border: 5px solid green;";
        f = true;
    } else {
        document.getElementById("kom2").style = "border: 5px solid red;";
        f = false;
    }

    if (e == true && f == true && g == true && h == true) {
        document.getElementById("doc2Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc2Fbs").hidden = false;
        document.getElementById("doc2Fbd").hidden = true;
    }
}

function funH1() {
    input = document.getElementById("h1").value;
    if (input == "<h1>") {
        document.getElementById("h1").style = "border: 5px solid green;";
        g = true;
    } else {
        document.getElementById("h1").style = "border: 5px solid red;";
        g = false;
    }

    if (e == true && f == true && g == true && h == true) {
        document.getElementById("doc2Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc2Fbs").hidden = false;
        document.getElementById("doc2Fbd").hidden = true;
    }
}

function funH2() {
    input = document.getElementById("h2").value;
    if (input == "</h1>") {
        document.getElementById("h2").style = "border: 5px solid green;";
        h = true;
    } else {
        document.getElementById("h2").style = "border: 5px solid red;";
        h = false;
    }

    if (e == true && f == true && g == true && h == true) {
        document.getElementById("doc2Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc2Fbs").hidden = false;
        document.getElementById("doc2Fbd").hidden = true;
    }
}

// Latihan 3
function funHref() {
    input = document.getElementById("href").value;
    if (input == "href=") {
        document.getElementById("href").style = "border: 5px solid green;";
        i = true;
    } else {
        document.getElementById("href").style = "border: 5px solid red;";
        i = false;
    }

    if (i == true && j == true && k == true) {
        document.getElementById("doc3Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc3Fbs").hidden = false;
        document.getElementById("doc3Fbd").hidden = true;
    }
}

function funSrc() {
    input = document.getElementById("src").value;
    if (input == "src=") {
        document.getElementById("src").style = "border: 5px solid green;";
        j = true;
    } else {
        document.getElementById("src").style = "border: 5px solid red;";
        j = false;
    }

    if (i == true && j == true && k == true) {
        document.getElementById("doc3Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc3Fbs").hidden = false;
        document.getElementById("doc3Fbd").hidden = true;
    }
}

function funAlt() {
    input = document.getElementById("alt").value;
    if (input == "alt=") {
        document.getElementById("alt").style = "border: 5px solid green;";
        k = true;
    } else {
        document.getElementById("alt").style = "border: 5px solid red;";
        k = false;
    }

    if (i == true && j == true && k == true) {
        document.getElementById("doc3Fbs").innerHTML = "Selamat! Kamu Benar. Coba latihan selanjutnya!";
        document.getElementById("doc3Fbs").hidden = false;
        document.getElementById("doc3Fbd").hidden = true;
    }
}