const button = document.querySelector('button');
let now = new Date()
let notes = [];

document.addEventListener("DOMContentLoaded", function (event) {
    let lastNotes = localStorage.getItem('notes');
    if (lastNotes != null) {
        const arr = JSON.parse(lastNotes);
        const filterArr = arr.filter(el => el !== null);
        let lastNotesString = "";
        for (let elem of filterArr) {
            lastNotesString += elem;
        }
        document.getElementById('note').innerHTML = lastNotesString;
        notes.push(lastNotesString);
    }
});

function getNote() {
    let text = document.querySelector('textarea').value;
    if (text != '') {
        const note = `<b><i>${now.getDate()}.0${now.getMonth() + 1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}</i></b><br>` + text;
        const result = `<div class="col underline">${note}</div>`;
        return result;
    } else {
        return alert("Пустая заметка!");
    }
}

function commentOutput() {
    notes.push(getNote());
    localStorage.setItem('notes', JSON.stringify(notes));
    notes = JSON.parse(localStorage.getItem('notes'));
    const filterNotes = notes.filter(el => el !== null);
    let notesString = "";
    for (let note of filterNotes) {
        notesString += note;
    }
    document.getElementById('note').innerHTML = notesString;
}
button.addEventListener("click", commentOutput);