const button = document.querySelector('button');

function checkSpam(str) {
    const result1 = str.replace(/viagra/ig,"***");
    const result2 = result1.replace(/XXX/ig,"***");
    return result2;
}
function getComment() {
    const comment = document.querySelector('textarea').value;
    const filteredComment = checkSpam(comment);
    return filteredComment;
}

let comments = [];

function commentOutput() {
    comments.push(getComment());
    let commentsString = "";
    for ( let comment of comments) {
        commentsString += `<div class="underline">${comment}</div>`;
    }
    document.getElementById('comment').innerHTML = commentsString;
}

button.addEventListener("click", commentOutput);