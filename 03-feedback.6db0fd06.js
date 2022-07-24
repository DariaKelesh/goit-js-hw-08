const e=document.querySelector(".feedback-form");document.querySelector("input[type=email]"),document.querySelector("textarea[name=message]");function t(){localStorage.getItem("feedback-form-state")}t(),e.addEventListener("submit",(function(a){a.preventDefault(),localStorage.setItem("feedback-form-state",e.elements.message.value),t(),e.reset()}));
//# sourceMappingURL=03-feedback.6db0fd06.js.map
