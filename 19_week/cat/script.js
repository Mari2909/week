const button = document.querySelector('button');
let petName = document.getElementById('petName');
let ownerName = document.getElementById('Name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let n = document.getElementById("breed").options.selectedIndex;
let breed = document.getElementById("breed").options[n].value;
let m = document.querySelectorAll('input[type="checkbox"]');
let feed = document.querySelectorAll('input[type="checkbox"]');
let gender = document.querySelectorAll('input[type="radio"]');
let comment = document.getElementById('comment');

class Cat {
    constructor(petName, ownerName, phone, email, breed, feed, gender, comment) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.phone = phone;
        this.email = email;
        this.breed = breed;
        this.feed = feed;
        this.gender = gender;
        this.comment = comment;
    }
}

function onButtonClick() {
    let cat = new Cat(`${petName.value}`, `${ownerName.value}`, `${phone.value}`, `${email.value}`, `${breed}`, `${feed}`, `${gender}`, `${comment.value} `);
    console.log(cat);
}

button.addEventListener('click', onButtonClick);