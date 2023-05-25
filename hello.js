let note = '';
let getNote = () => {
    if (localStorage.getItem('note')){
        note = localStorage.getItem('note');
    }
    else {
        note = 'Nothing saved! Add a note!';
    }
    document.getElementById('note').innerHTML = note;
}

let saveNote = () => {
    let note = document.getElementById('note').innerHTML;
    localStorage.setItem('note', note);
}

let clearNote = () => {
    let a = document.getElementsByClassName('clear');
    a.onclick = localStorage.clear();
}

window.onload = () => {
    getNote();
    clearNote();
}