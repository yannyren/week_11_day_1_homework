var dummyCats = [
  {name: "Alex", favFood: "Salmon", link:"/img/Alex.png" },
  {name: "Keith", favFood: "Tuna", link: "/img/Keith.jpg"},
]


var app = function() {
  for (var i = 0; i < dummyCats.length; i++) {
    addCat(dummyCats[i].name, dummyCats[i].favFood, dummyCats[i].link);
  }
};

var addCat = function(name, favFood, link) {
    var ul = document.createElement("ul");
    ul.classList.add("cat");

    var liName = document.createElement("li");
    liName.innerText = "Name: " + name;

    var liFavFood = document.createElement("li");
    liFavFood.innerText = "Favourite food: " + favFood;

    var li = document.createElement("li");
    var liImg = document.createElement("img");
    liImg.src = link;
    liImg.style.width = "500px";

    ul.appendChild(liName);
    ul.appendChild(liFavFood);
    ul.appendChild(li);
    li.appendChild(liImg)

    var cats = document.querySelector("#cats");
    cats.appendChild(ul);

};

window.onload = app;


