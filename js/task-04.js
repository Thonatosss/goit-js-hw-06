const refs = {
    IncrementBtn: document.querySelector('[data-action = "increment"]'),
    DecrementBtn: document.querySelector('[data-action = "decrement"]'),
    counterValueText: document.querySelector("#value"),
};


let counterValue = 0;

const onIncrementBtnClick = () =>  refs.counterValueText.textContent = counterValue += 1;

const onDecrementBtnClick = () => refs.counterValueText.textContent = counterValue -= 1;



refs.IncrementBtn.addEventListener('click', onIncrementBtnClick);
refs.DecrementBtn.addEventListener('click', onDecrementBtnClick);

