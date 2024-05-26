const ulCat = document.querySelector("#categories");
const liCat = document.querySelectorAll(".item");
const li = document.querySelectorAll("li");

console.log(`Number of categories: ${ulCat.children.length}`);

liCat.forEach(function luFunction(element) {
  console.log(`Category: ${element.firstChild.nextElementSibling.innerHTML}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
