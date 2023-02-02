const refs = {
    listItem: document.querySelectorAll('.item'),
    listItemTitles: document.querySelectorAll('.item > h2'),
    elementsOfCategory: document.querySelectorAll('.item > ul > li'),
};


const countAmountOfCatrgories = categories => console.log(`Number of categories: ${categories.length}`);
countAmountOfCatrgories(refs.listItem);



const countAmountOfElInCategory = (category) => {


};

