const refs = {
    input: document.getElementById('validation-input'),

};

const validation = () => {

    if (refs.input.value.length < refs.input.getAttribute('data-length')) {
        refs.input.classList.add('invalid');
    }

     refs.input.classList.add('valid');


};
refs.input.addEventListener("blur", validation);