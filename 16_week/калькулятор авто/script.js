const button = document.querySelector('button');
const сarСost = document.getElementById('sum');
const optionValue = document.querySelectorAll('option');
const inputValue = document.querySelectorAll('input');
const model = document.getElementById('car_model');
const year = document.getElementById('year');
const check = [...document.querySelectorAll('input[type=checkbox]')];

function sum() {
    const values = [];
    optionValue.forEach((option) => {
        if (option.selected) {
            values.push(option.value);
        }
    });
    inputValue.forEach((checkbox) => {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    });
    const result = values.reduce((sum, item) => sum += +item, 0);
    сarСost.innerHTML = 'Стоимость авто: до ' + result + ' млн. руб.';
}

function getModelValue() {
    return +model.value;
}

function getYearValue() {
    return +year.value;
}

function getVacancies() {
    const vacancies = [];
    if (!getModelValue()) {
        c
    }
    if (!getYearValue()) {
        vacancies.push('Пожалуйста, выберите год выпуска');
    }
    if (!check.find((element) => element.checked)) {
        vacancies.push('Пожалуйста, выберите пробег');;
    }
    return vacancies;
}

function onButtonClick() {
    const errors = getVacancies();
    let result = '';
    if (!errors.length) {
        result = sum();
    } else {
        errors.forEach((elem) => {
            result += "<br>" + elem;
            сarСost.innerHTML = result;
        })
    }
}

button.addEventListener('click', onButtonClick);



