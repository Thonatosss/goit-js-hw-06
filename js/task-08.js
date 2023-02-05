const refs = {
    form: document.querySelector(".login-form"),
    submitBtn: document.querySelector(".login-form button"),
};



const onFormSubmit = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const formData = new FormData(event.currentTarget);
    if (formElements.email.value === '' || formElements.password.value === '') {
        alert("Заповніть всі поля!")
    };
    formData.forEach((name, value) => {
        console.log(`${value} : ${name}`);
    });
    refs.form.reset();

};


refs.form.addEventListener("submit", onFormSubmit);