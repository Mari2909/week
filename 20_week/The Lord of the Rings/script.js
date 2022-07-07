document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://the-one-api.dev/v2/character", {
        headers: {
            'Authorization': 'Bearer vCr-1vzWFGFBzKsmln_3'
        }
    })
        .then(response => response.json())
        .then(parametr => {
            let characters = parametr.docs;
            let characterContent = "";
            for (let character of characters) {
                characterContent += `<div><h5>${character.name}</h5></div>`;
            }
            document.getElementById("characterContent").innerHTML = characterContent;
        }
        )
})