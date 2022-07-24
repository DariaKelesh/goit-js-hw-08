!function(){var e=document.querySelector(".feedback-form"),t=(document.querySelector("input[type=email]"),document.querySelector("textarea[name=message]"),"feedback-form-state");function a(){localStorage.getItem(t)}a(),e.addEventListener("submit",(function(n){n.preventDefault(),localStorage.setItem(t,e.elements.message.value),a(),e.reset()}))}();
//# sourceMappingURL=03-feedback.58e3aaff.js.map
