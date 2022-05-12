let showMessage =()=> {
    let name = document.getElementsByTagName("input")[0].value;
    document.getElementById("name2").value=(`Привет, ${name}!`);
}

