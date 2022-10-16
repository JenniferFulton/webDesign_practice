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

function validateStudentform() {

    //name validation
    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == "") {
        alert("Please provide you full name");
        return false
    } 

    //address validation

    //city validation

    //zip validation
    var zip = document.studentForm.zip.value
    if (zip == "" || zip.length != 5 || isNaN(zip)) {
        alert("Please enter a valid zip code")
        return false
    }

    //DOB validation
    if (document.studentForm.bday.value == ""){
        alert("please enter your birthday")
        return false
    }

    //email validation
    var email = document.studentForm.email.value 
    const email_regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (email_regex.test(email)) {
        
    }
    else{
        alert("please enter a valid email")
        return false
    }
    
    //password validation
    const password1 = document.studentForm.password.value;
    const password2 = document.studentForm.confirmPassword.value;
    if (password1.length == 0 || password2.length == 0){
        alert("Please provide a password and confirm it")
        return false
    }
    if (JSON.stringify(password1) === JSON.stringify(password2)){
        
    }
    else {
        alert("Passwords do not match")
        return false
    }

}




