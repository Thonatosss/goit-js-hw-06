const refs = {
  input: document.getElementById("validation-input"),
};


const validation = () => {
  refs.input.classList.remove("valid", "invalid");
  if (refs.input.value.length === Number(refs.input.getAttribute("data-length"))) {
      return refs.input.classList.add("valid");
  };
  refs.input.classList.add("invalid");

};
refs.input.addEventListener("blur", validation);
