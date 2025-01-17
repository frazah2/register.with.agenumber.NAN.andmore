function start(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let surname = document.getElementById('surname').value.trim();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let age = document.getElementById('age').value.trim();
    let gender = document.getElementById('gender').value;

    let isValid = true;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('surnameError').innerHTML = "";
    document.getElementById('usernameError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('ageError').innerHTML = "";
    document.getElementById('genderError').innerHTML = "";

    if (!name) {
        document.getElementById('nameError').innerHTML = "Name is required.";
        isValid = false;
    }
    if (!surname) {
        document.getElementById('surnameError').innerHTML = "Surname is required.";
        isValid = false;
    }
    if (!username) {
        document.getElementById('usernameError').innerHTML = "Username is required.";
        isValid = false;
    }
    if (!password) {
        document.getElementById('passwordError').innerHTML = "Password is required.";
        isValid = false;
    }
    if (!age) {
        document.getElementById('ageError').innerHTML = "Age is required.";
        isValid = false;
    }else if(isNaN(age)){
        document.getElementById('ageError').innerHTML = "Age must be a number.";
        isValid = false;
    }
    if (!gender) {
        document.getElementById('genderError').innerHTML = "Gender is required.";
        isValid = false;
    }

    if (isValid) {
        alert('Welcome!')
    }
}

document.onkeydown = (e) => {
    if (e.key === "Enter" && document.getElementById('gender').value !== "") {
        start(e);
    }
};