function changeTheme() {
    if (document.getElementById('theme').value=="dark") {
        document.body.style.backgroundColor = "black";
    } else if (document.getElementById('theme').value=='light') {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "gray"; 
    }
}