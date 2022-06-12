const button = document.querySelector('button');
const img = document.getElementById('avatar');

document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById('author').value = name;
    }
    let photo = localStorage.getItem('avatar');
    if (photo != null) {
        document.getElementById('avatar').src = photo;
    }
});

img.addEventListener("click", getImg);
function getImg() {
    let href = prompt("Вставьте ссылку на картинку:");
    img.src = href;
    localStorage.setItem('avatar', href)
}

function checkSpam(str) {
    const result = str.replace(/viagra|XXX/ig, "***");
    return result;
}
function getComment() {
    const author = document.getElementById('author').value;
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }
    const avatar = document.getElementById('avatar').src;
    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', avatar);
    }
    const comment = document.querySelector('textarea').value;
    const filteredComment = checkSpam(comment);
    const result = `<div class="underline"><img src='${avatar}'class = "avatar col-1 d-flex justify-content-center align-items-center"></img><span class = "col">${author}: </span><span>${filteredComment}</span></div>`;
    return result;
}

const comments = [];

function commentOutput() {
    comments.push(getComment());
    localStorage.setItem('comments', JSON.stringify(comments));
    let comments2 = JSON.parse(localStorage.getItem('comments'));
    let commentsString = "";
    for (let comment of comments2) {
        commentsString += comment;
    }
    document.getElementById('comment').innerHTML = commentsString;
}
button.addEventListener("click", commentOutput);