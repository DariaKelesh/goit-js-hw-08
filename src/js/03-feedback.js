const form = document.querySelector(".feedback-form");
const email = document.querySelector("input[type=email]");
const message = document.querySelector("textarea[name=message]");
const LOCALSTORAGE_KEY = "feedback-form-state";

updateLocalStorage();

form.addEventListener("submit", setLocalStorage)

function setLocalStorage(evt) {
    evt.preventDefault();

    localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
    updateLocalStorage();
    form.reset();
}

function updateLocalStorage() {
    
    localStorage.getItem(LOCALSTORAGE_KEY) || "";
}
