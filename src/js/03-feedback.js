import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";


const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
 


initForm();

form.addEventListener("input", throttle(handleInput, 500) )

function handleInput() {
    const emailRef = form.elements.email.value;
    // console.log(emailRef);
    const messageRef = form.elements.message.value;
    const feedbackRef = {
        email: emailRef,
        message: messageRef
    }
        return save(LOCALSTORAGE_KEY, feedbackRef)
}


function initForm() {
    let savedData = load(LOCALSTORAGE_KEY);

    if (savedData) {
        
        form.elements.email.value = savedData.email;
        form.elements.message.value = savedData.message;
    }
  }


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (form.elements.email.value !== "" && form.elements.message.value !== "") {
        console.log(load(LOCALSTORAGE_KEY));  
    } else {
        alert("Fill in all the fields!!!")
    }
    
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
   
}