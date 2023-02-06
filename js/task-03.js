const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const elements = images.map((image) => {
  const listEl = `<li><img width = "300" height= "300" src = '${image.url}' alt = "${image.alt}"></li>`;
  list.style.cssText = 'display:flex; justify-content:center; align-items:center; list-style-type: none;';
  return listEl;
});

list.insertAdjacentHTML('afterbegin', `${elements}`)
