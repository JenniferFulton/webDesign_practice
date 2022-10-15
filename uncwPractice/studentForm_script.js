// Togle between login and registering
function togle_login() {

}

function togle_register() {

}

// function to validate information provided by student in regestration form
function validateStudentform() {

    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == "") {
        alert("Please provide you full name");
        return false
    } 

    if (document.forms["studentForm"]["lname"].value.length == 0) {
        alert("Please provide your last name");
    }

}