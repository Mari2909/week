function onSearch() {
    let searchTopic = document.getElementById("gifSearch").value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=SET_KEY_HERE&q=${searchTopic}&limit=5&offset=0&rating=g&lang=en`)
        .then(response => console.log(response.json()))
        .then(result => {
            let gifs = result;
            let gifContent = "";
            for (let gif of gifs) {
                gifContent += `<img src="${gif.url}">`;
            }
            document.getElementById("gif").innerHTML = gifContent;
        })
        .catch(error => console.log(error));
}