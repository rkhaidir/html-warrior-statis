var $ = function (id) {
    return document.getElementById(id);
}

// Json to store player information
var playerMaster = {};
playerMaster.players = [];

if (localStorage && localStorage.getItem('playerMaster')) {
    playerMaster = JSON.parse(localStorage.getItem('playerMaster'));
} else {
    localStorage.setItem('playerMaster', JSON.stringify(playerMaster));
}

// register form
var joinList = function () {
    var myFirstName = $("firstName").value;
    var myLastName = $("lastName").value;
    var myEmailAddress = $("emailAddress").value;
    var mypassword = $("password").value;
    var myAddress = $("address").value;

    var isValid = true;

    if ($("firstName").value == "") {
        $("firstNameError").firstChild.nodeValue = "Please, Enter your first name.";
        isValid = false;
    } else {
        $("firstNameError").firstChild.nodeValue = "";
    }

    if ($("lastName").value == "") {
        $("lastNameError").firstChild.nodeValue = "Please, Enter your last name.";
        isValid = false;
    } else {
        $("lastNameError").firstChild.nodeValue = "";
    }

    if ($("emailAddress").value == "") {
        $("emailAddressError").firstChild.nodeValue = "Please, Enter your email address";
        isValid = false;
    } else {
        $("emailAddressError").firstChild.nodeValue = "";
    }

    if ($("password").value == "") {
        $("passwordError").firstChild.nodeValue = "Please, Enter your password";
        isValid = false;
    } else {
        $("passwordError").firstChild.nodeValue = "";
    }

    if ($("address").value == "") {
        $("addressError").firstChild.nodeValue = "Please, Enter your address";
        isValid = false;
    } else {
        $("addressError").firstChild.nodeValue = "";
    }

    if (isValid == true) {
        // get player information
        var player = {};
        player.myFirstName = myFirstName;
        player.myLastName = myLastName;
        player.myEmailAddress = myEmailAddress;
        player.mypassword = mypassword;
        player.myAddress = myAddress;

        // store new player information
        if (localStorage && localStorage.getItem('playerMaster')) {
            var playerMaster = JSON.parse(localStorage.getItem('playerMaster'));
            var position = findPlayerEmail(myEmailAddress);

            if (position < 0) {
                playerMaster.players.push(player);
            } else {
                alert("This email already existed");
            }

            localStorage.setItem('playerMaster', JSON.stringify(playerMaster));
        }

        // store current user
        localStorage.setItem("nowUserEmail", myEmailAddress);
        $("registerForm").submit();
    }

}



// login form
var loginList = function () {
    var myEmailAddressLogIn = $("emailAddressLogIn").value;
    var mypasswordLogIn = $("passwordLogIn").value;

    var isValid = true;

    if ($("emailAddressLogIn").value == "") {
        $("emailAddressLogInError").firstChild.nodeValue = "Please, Enter your email address";
        isValid = false;
    } else {
        $("emailAddressLogInError").firstChild.nodeValue = "";
    }

    if ($("passwordLogIn").value == "") {
        $("passwordLogInError").firstChild.nodeValue = "Please, Enter your password";
        isValid = false;
    } else {
        $("passwordLogInError").firstChild.nodeValue = "";
    }

    if (isValid == true) {

        // compare current player with players in playerMaster
        if (localStorage && localStorage.getItem('playerMaster')) {
            var playerMaster = JSON.parse(localStorage.getItem('playerMaster'));
            var position = findPlayerEmail(myEmailAddressLogIn);

            if (position < 0) {
                alert("Email wrong or not registered! Please, register first!");
            } else {
                var positionEmail = playerMaster["players"][position]['myEmailAddress']
                var positionPhone = playerMaster["players"][position]['mypassword']

                if (positionPhone != mypasswordLogIn) {
                    alert("Please Check your Password!!");
                } else {
                    alert("Log in success!!");
                    localStorage.setItem("nowUserEmail", positionEmail);
                    $("loginForm").submit();
                }

            }

        }

    }

}


// check if current player is registered or not
function findPlayerEmail(myEmailAddress) {
    var size = playerMaster["players"].length;

    for (i = 0; i < size; i++) {
        var currentMyEmailAddress = playerMaster["players"][i]['myEmailAddress'];
        if (currentMyEmailAddress == myEmailAddress) {
            return i;
        }
    }
    return -1;
}


window.onload = function () {

    getParams();

    // show register form or login form page by parameter
    if (value == "register") {
        document.getElementById("loginShow").style.display = 'none';
        $("registerButton").onclick = joinList;
    } else {
        document.getElementById("registerShow").style.display = 'none';
        $("loginButton").onclick = loginList;
    }
}


// get parmeter from url (register, login)
function getParams() {
    var param = new Array();

    var url = decodeURIComponent(location.href);
    url = decodeURIComponent(url);

    var params;
    params = url.substring(url.indexOf('?') + 1, url.length);
    params = params.split("&");

    key = params[0].split("=")[0];
    value = params[0].split("=")[1];

    return value;
}