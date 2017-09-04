var dummyCats = [
  {name: "Alex", favFood: "Salmon", link: },
  {name: "Keith", favFood: "Tuna", link: },
]


var app = function() {};

var addCat = function(name, favFood, link) {
    var ul = document.createElement("ul");
    ul.classList.add("cat");

    var liName = document.createElement("li");
    liName.innerText = "Name: " + name;

    var liFavFood = document.createElement("li");
    liFood.innerText = "Favourite food: " + favFood;

    var liImg = document.createElement("li");
    liImg.innerHTML = "<img> width="500" src="link" </img>";

    ul.appendChild(liName);
    ul.appendChild(liFavFood);
    ul.appendChild(liImg);

    var cats = document.querySelector("#cats");
    cats.appendChild(ul);

};

window.onload = app;


