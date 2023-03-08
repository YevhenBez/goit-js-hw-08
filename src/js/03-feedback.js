const form = document.querySelector('.feedback-form');

const inputForm = document.querySelector('input');

const textareaForm = document.querySelector('textarea');

form.addEventListener('input', onFormInput);

function onFormInput(event) {
    // event.preventDefault();

    const {
        elements: { email, message },
    } = event.currentTarget

    const mailAndMessage = { email: email.value, message: message.value };
    
    // if (mailAndPassword.email === "" || mailAndPassword.password === "") {
    //     alert(message);
    //     return;
    // };
    localStorage.setItem("feedback-form-state", JSON.stringify(mailAndMessage)); 

    // console.log(mailAndMessage);

    // event.currentTarget.reset();


}

const savedMailAndMessage = localStorage.getItem("feedback-form-state");

const parsedMailAndMessage = JSON.parse(savedMailAndMessage);

if (savedMailAndMessage) {
    inputForm.value = parsedMailAndMessage.email;
    textareaForm.value = parsedMailAndMessage.message;
};