const button = document.querySelector('button');

function onButtonClick() {
const data = document.getElementById('value').value;
const names = data.toLowerCase().split(" ");

const filteredNames = names.filter(el=>el !=='');

const firstName = filteredNames[1];
const secondName = filteredNames[0];
const patronymic = filteredNames[2];

const firstNameUp = firstName[0].toUpperCase() + firstName.slice(1);
const secondNameUp = secondName[0].toUpperCase() + secondName.slice(1);
const patronymicUp = patronymic[0].toUpperCase() + patronymic.slice(1);

document.getElementById('firstName').value = firstNameUp;
document.getElementById('secondName').value = secondNameUp;
document.getElementById('patronymic').value = patronymicUp;
document.getElementById('data').classList.add ("d-none");
document.getElementById('result').classList.remove ("d-none";
}

button.addEventListener('click', onButtonClick);