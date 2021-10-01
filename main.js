let page = document.querySelectorAll(".page");
let item = document.querySelectorAll(".landing .menu .items");

for(let i=0; i<item.length; i++){
    item[i].addEventListener("click", function () {
        page[i].scrollIntoView();
      });
}
