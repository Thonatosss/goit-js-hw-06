const refs = {
    input: document.querySelector("#name-input"),
    userName: document.querySelector("#name-output"),
};

const onInputChange = (event) =>{
    refs.userName.textContent = event.currentTarget.value;

    if(refs.userName.innerText === ""){
        refs.userName.textContent = "Anonymous";
    };
};




refs.input.addEventListener('input', onInputChange);


