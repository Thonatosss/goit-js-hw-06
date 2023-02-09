const refs = {
  numberOfCatrgories: document.querySelectorAll("#categories .item"),
};

// console.log(`Number of categories: ${refs.numberOfCatrgories.length}`);

// console.log(`Category: ${refs.parentList.childNodes[1].childNodes[1].textContent}`);
// console.log(`Elements: ${refs.parentList.childNodes[1].childNodes[3].children.length}`);

// console.log(`Category: ${refs.parentList.childNodes[3].childNodes[1].textContent}`);
// console.log(`Elements: ${refs.parentList.childNodes[3].childNodes[3].children.length}`);

// console.log(`Category: ${refs.parentList.childNodes[5].childNodes[1].textContent}`);
// console.log(`Elements: ${refs.parentList.childNodes[5].childNodes[3].children.length}`);

const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);
for (const item of categoriesItems) {
  const categoriesName = item.querySelector("h2").textContent;
  console.log(`Category: ${categoriesName}`);
  const categoriesElements = item.querySelectorAll("li").length;
  console.log(`Elements: ${categoriesElements}`);
}
