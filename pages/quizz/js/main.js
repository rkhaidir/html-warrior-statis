var playerMaster = JSON.parse(localStorage.getItem('playerMaster'));
var nowUserEmail = localStorage.getItem("nowUserEmail");
var position = findNowUserEmail(nowUserEmail);

var $ = function (id) {
    return document.getElementById(id);
}

// user can choose quiz type and there are 2 type of quiz
var mainListLang = function () {
    localStorage.setItem("myQuizType", "evaluasi1");
    $("mainForm").submit();
}
var mainListGlobal = function () {
    localStorage.setItem("myQuizType", "evaluasi2");
    $("mainForm").submit();
}


// check if current player is registered or not
function findNowUserEmail(myEmailAddress) {
    var size = playerMaster["players"].length;

    for (i = 0; i < size; i++) {
        var NowuserEmail = playerMaster["players"][i]['myEmailAddress'];
        if (NowuserEmail == myEmailAddress) {
            return i;
        }
    }
    return -1;
}



window.onload = function () {
    var position = findNowUserEmail(nowUserEmail);
    // Show current player name
    $("welcomeName").firstChild.nodeValue = playerMaster["players"][position]['myFirstName'];
    // act depend on what player choose
    $("evaluasi1").onclick = mainListLang;
    $("evaluasi2").onclick = mainListGlobal;

    // button and control
    var goResultButton = document.getElementById('goResultButton');
    var logOutButton = document.getElementById('logOutButton');

    goResultButton.onclick = function () {
        location.replace("result.html");
    }

    logOutButton.onclick = function () {
        localStorage.setItem("nowUserEmail", "");
        location.replace("index.html");
    }
}