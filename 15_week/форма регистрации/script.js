function check() {
    let name = document.getElementById("exampleInputName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password1 = document.getElementById("exampleInputPassword1");
    let password2 = document.getElementById("exampleInputPassword2");

    document.getElementById('errorMessage').innerHTML="";

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML+="Вы не ввели имя<br>";
    }
    if (lastName.value == '') {
    document.getElementById('errorMessage').innerHTML+="Вы не ввели фамилию<br>";
    }
    if (email.value == '') {
    document.getElementById('errorMessage').innerHTML+="Ваш email не заполнен <br>"
    }
    if (password1.value == '') {
    document.getElementById('errorMessage').innerHTML+="Вы не ввели пароль<br>";
    }
    if (password1.value.length < 3) {
        document.getElementById('errorMessage').innerHTML+="Ваш пароль слишком короткий<br>";
    }    
    if (password2.value == '') {
    document.getElementById('errorMessage').innerHTML+="Подтвердите пароль<br>";
    }
    if (password1.value != password2.value || password1.value == '') {
        document.getElementById('errorMessage').innerHTML+="Пароли не совпадают. Повторите попытку.<br>";
    }
    else {
        alert ('Добро пожаловать, '+ name.value + '!');
    }
}
