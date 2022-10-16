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

    const password1 = document.studentForm.password.value;
    const password2 = document.studentForm.confirmPassword.value;
    if (JSON.stringify(password1) === JSON.stringify(password2)){
        //pass
    }
    else {
        alert("Passwords do not match")
        return false
    }

    var email = document.studentForm.email.value 
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (regex.test(email)) {
        //pass
    }
    else{
        alert("please enter a valid email")
        return false
    }

}




