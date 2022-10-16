document.getElementById("register").style.display = "none";

// Togle between login and registering
function register_toggle() {
    var login = document.getElementById("login")
    var register = document.getElementById("register")

    if (login.style.display === "none") {
        login.style.display = "block";
        register.style.display = "none"
    }
    else {
        login.style.display = "none";
        register.style.display = "block";
    }
}

function login_toggle() {
    var login = document.getElementById("login")
    var register = document.getElementById("register")

    if (register.style.display === "none") {
        register.style.display = "block";
        login.style.display = "none"
    }
    else {
        register.style.display = "none";
        login.style.display = "block";
    }
}


// Validate registration form
function validateStudentform() {

    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == "") {
        alert("Please provide you full name");
        return false
    } 

    if (document.forms["studentForm"]["lname"].value.length == 0) {
        alert("Please provide your last name");
    }

}