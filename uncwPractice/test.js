var password1 = 1234
var password2 = 123
if (JSON.stringify(password1) === JSON.stringify(password2)){
    console.log(true)
}
else {
    console.log(false)
}


var email = "fdsfds"
const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
if (regex.test(email)) {
    console.log("valid email")
}
else{
    console.log("not valid email")
}