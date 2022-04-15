var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');

function validatePW()
{
    var erorrMsg = document.getElementById('error');
    if(password.value.length < 8 || password.value != confirmPassword.value)
    {
        error.style.display = "block";
    }
    else 
    {
        error.style.display = "none";
    }
}