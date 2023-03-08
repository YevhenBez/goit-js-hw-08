import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const inputForm = document.querySelector('input');

const textareaForm = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
    
    const mailAndMessage = { email: inputForm.value, message: textareaForm.value };
    
    localStorage.setItem("feedback-form-state", JSON.stringify(mailAndMessage)); 

}

const savedMailAndMessage = localStorage.getItem("feedback-form-state");

const parsedMailAndMessage = JSON.parse(savedMailAndMessage);

if (savedMailAndMessage) {
    inputForm.value = parsedMailAndMessage.email;
    textareaForm.value = parsedMailAndMessage.message;
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    const savedMailAndMessage = localStorage.getItem("feedback-form-state");

    const parsedMailAndMessage = JSON.parse(savedMailAndMessage);

    console.log(parsedMailAndMessage);

    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem("feedback-form-state");
}