const body = document.getElementsByTagName('body')[0];

const email = document.getElementById('email');
email.className = "email";
const phoneNumber = document.getElementById('phoneNumber');
phoneNumber.className = "phoneNumber";
const password = document.getElementById('password');
password.className = "password";
const btn = document.getElementsByTagName('button')[0];
btn.className = "buttonSubmit";

const backgroundContainer = document.createElement('div');
backgroundContainer.className = "container";

phoneNumber.maxLength = 8;

function isValidEmail() {
    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(typeof emailValue);
    if (emailPattern.test(emailValue)) {
        alert("Email is valid");
        return true;
    } else {
        alert("Please enter a valid email address.");
        return false;
    }
}

function isValidPassword() {
    const passwordValue = password.value;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(passwordValue);
    const hasLowercase = /[a-z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    let validationMessage = "";

    if (passwordValue.length < minLength) {
        validationMessage += "Password must be at least 8 characters long.\n";
    }
    if (!hasUppercase) {
        validationMessage += "Password must contain at least one uppercase letter.\n";
    }
    if (!hasLowercase) {
        validationMessage += "Password must contain at least one lowercase letter.\n";
    }
    if (!hasNumber) {
        validationMessage += "Password must contain at least one digit.\n";
    }
    if (!hasSpecialChar) {
        validationMessage += "Password must contain at least one special character.\n";
    }

    if (validationMessage === "") {
        alert("Password is valid");
        return true;
    } else {
        alert(validationMessage.trim());
        return false;
    }

}

function isValidPhone() {
    const phoneNumberValue = phoneNumber.value;

    if (/^\d{8}$/.test(phoneNumberValue)) {
        alert("Phone number is valid");
        return true;
    } else {
        alert("Please enter a valid 8 digit phone number.");
        return false;
    }
}

btn.addEventListener("click", function () {
    if(isValidPhone() && isValidPassword() && isValidPhone() == true) {
        window.location.href = "todolist.html";
    }
});

body.appendChild(backgroundContainer);
backgroundContainer.appendChild(email);
backgroundContainer.appendChild(password);
backgroundContainer.appendChild(phoneNumber);
backgroundContainer.appendChild(btn);