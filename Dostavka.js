// Отримуємо елементи
const modal = document.getElementById('myModal-d');
const openDostavka = document.getElementById('openDostavka');
const closeBtn = document.getElementsByClassName('close-d')[0];

openDostavka.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}