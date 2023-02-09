const refs = {
    form: document.querySelector(".login-form"),
    submitBtn: document.querySelector(".login-form button"),
};



const onFormSubmit = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const formData = new FormData(event.currentTarget);
    if (formElements.email.value.trim() === '' || formElements.password.value === '') {
        return alert("Заповніть всі поля!")
    };
    const output = {};
    output.email = formData.get('email');
    output.password = formData.get('password');
    console.log(output);
    refs.form.reset();

};


refs.form.addEventListener("submit", onFormSubmit);