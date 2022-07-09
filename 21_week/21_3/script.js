const button = document.querySelector('button');
const form = document.querySelector('form');

button.onclick = function (event) {
    event.preventDefault();
    
    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(form),
            
        })
        .then (response => response.json())
        .then (cat =>{
            console.log(cat);
        })
        .catch (error => console.log(error));
    }
 