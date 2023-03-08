const form = document.querySelector('.feedback-form');

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

    console.log(mailAndMessage);

    // event.currentTarget.reset();
}