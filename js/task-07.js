const refs = {
    input: document.getElementById("font-size-control"),
    textToGrow: document.getElementById('text'),

};

const textGrow = () => {
    refs.textToGrow.style.fontSize = `${refs.input.value}px`;
};

refs.input.addEventListener("input", textGrow);
