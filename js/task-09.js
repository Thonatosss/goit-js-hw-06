const refs = {
  colorSpan: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onChangeColorBtnClick = () => {
  const color = refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorSpan.textContent = `${color}`;

}

refs.changeColorBtn.addEventListener("click", onChangeColorBtnClick);
