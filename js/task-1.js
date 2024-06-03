const categoriesMain = document.querySelector("#categories");
const listClassItem = categoriesMain.querySelectorAll(".item");
console.log("Number of categories: ", listClassItem.length);
//
listClassItem.forEach((element) => {
  const titleName = element.querySelector("h2").textContent;
  console.log("Category:", titleName);
  const counterItem = element.querySelectorAll("li").length;
  console.log("Elements:", counterItem);
});
