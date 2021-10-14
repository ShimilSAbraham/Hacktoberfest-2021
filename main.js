let members = document.querySelectorAll(".team .card-container .card"); // so store all the cards
let num = document.querySelector(".team .title .num"); // number of contributors div
num.textContent = members.length;

// add all the contributor's name in the names array
let names = [];
for (let i = 0; i < members.length; i++) {
  let name = members[i].querySelector(".name").textContent;
  names.push(name);
}

// searches for the name with the search value, which gets added to the result array
function looking(name, searchkey) {
  searchkey = searchkey.toLowerCase();
  name = name.toLowerCase();

  //search returns -1 in case the string is not found
  if(name.search(searchkey) >= 0)
    return name;
}

let result = []; // holds the filtered names after search

const search_input = document.getElementById("search");
let searchValue = "";

search_input.addEventListener("input", (e) => {
  // saving the input value
  searchValue = e.target.value;
  showCards();
});

// figures out which card should be displayed while searching
const showCards = async () => {
  // clear the results
  result = [];

  //updates the result array
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if(looking(name, searchValue))
      result.push(name);
  }

  // goes through each card to check if it should be display or not
  members.forEach((member) => {
    let name = member.querySelector(".name").textContent;
    if(result.includes(name))
      member.style.display = "flex";
    else
      member.style.display = "none";
  });
};


// Scrolling on menu item's click

let page = document.querySelectorAll(".page");
let item = document.querySelectorAll(".landing .menu .items");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    page[i].scrollIntoView();
  });
}

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
