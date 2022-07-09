const firstName = document.getElementById("exampleInputName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password1 = document.getElementById("exampleInputPassword1");
const password2 = document.getElementById("exampleInputPassword2");
const button = document.querySelector(".btn-primary");
const input = document.querySelectorAll("input");

class User {
    constructor(firstName, lastName, email, password1, password2) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password1 = password1;
        this.password2 = password2;
    }
}

function ValidateEmail(emailField) {
    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        return false;
    }
}

function ValidatePassword(passwordField) {
    const passwordFormat = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (passwordField.value.match(passwordFormat)) {
        return true;
    }
    else {
        return false;
    }
}


function check(element) {
    element.preventDefault();

    const errors = [];

    if (firstName.value == '') {
        errors.push("Вы не ввели имя<br>");
        firstName.classList.add("invalid");
    }
    else { firstName.classList.remove("invalid"); }

    if (lastName.value == '') {
        errors.push("Вы не ввели фамилию<br>");
        lastName.classList.add("invalid");
    }
    else { lastName.classList.remove("invalid"); }

    if (email.value == '') {
        errors.push("Ваш email не заполнен<br>");
        email.classList.add("invalid");
    }
    else { email.classList.remove("invalid"); }

    if (ValidateEmail(email) != true) {
        errors.push("Ваш адрес электронной почты введен неверно!<br>");
        email.classList.add("invalid");
    }
    else { email.classList.remove("invalid"); }

    if (password1.value == '') {
        errors.push("Вы не ввели пароль<br>");
        password1.classList.add("invalid");
    }
    else { password1.classList.remove("invalid"); }

    if (password2.value == '') {
        errors.push("Подтвердите пароль<br>");
        password2.classList.add("invalid");
    }
    else { password2.classList.remove("invalid"); }

    if (password1.value != password2.value || password1.value == '') {
        errors.push("Пароли не совпадают. Повторите попытку<br>");
        password2.classList.add("invalid");
    }
    else { password2.classList.remove("invalid"); }

    if (ValidatePassword(password1) != true) {
        errors.push("Ваш пароль недостаточно надежен!<br>");
        password1.classList.add("invalid");
    }
    else { password1.classList.remove("invalid"); }

    let errorsString = errors.join('');

    document.getElementById('errorMessage').innerHTML = errorsString;

    if (errorsString == '') {
        let user = new User(`${firstName.value}`, `${lastName.value}`, `${email.value}`, `${password1.value}`, `${password2.value}`);
            fetch("https://httpbin.org/post",
                {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json;charset="UTF-8'
                    },
                })
                .then (response => response.json())
                .then (user =>{
                    console.log(user);
                })
                .catch (error => console.log(error));
    }
}

button.addEventListener("click", check)