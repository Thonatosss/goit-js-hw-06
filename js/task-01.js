const refs = {
    numberOfCatrgories: document.querySelectorAll('#categories .item'),
    parentList: document.querySelector('#categories'),
};
console.log(`Number of categories: ${refs.numberOfCatrgories.length}`);

console.log(`Category: ${refs.parentList.childNodes[1].childNodes[1].textContent}`);
console.log(`Elements: ${refs.parentList.childNodes[1].childNodes[3].children.length}`);

console.log(`Category: ${refs.parentList.childNodes[3].childNodes[1].textContent}`);
console.log(`Elements: ${refs.parentList.childNodes[3].childNodes[3].children.length}`);

console.log(`Category: ${refs.parentList.childNodes[5].childNodes[1].textContent}`);
console.log(`Elements: ${refs.parentList.childNodes[5].childNodes[3].children.length}`);
