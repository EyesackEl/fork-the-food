<<<<<<< HEAD
var currentRecipe = "currentRecipe";
var favButton = "favbutton";
var favContainer = "favcontainer";
var localStorageRecipes = ["one", "two", "three", "four"];
var savedRecipes = 5;

// favButton.addEventListener("click", function favRecipe() {

//     localStorage.setItem(localStorageRecipes[savedRecipes], currentRecipe)
//     savedRecipes++;
// });

localStorage.setItem(0, "currentRecipe0");
localStorage.setItem(1, "currentRecipe1");
localStorage.setItem(2, "currentRecipe2");
localStorage.setItem(3, "currentRecipe3");
localStorage.setItem(4, "currentRecipe4");

displayFavorites();

function displayFavorites() {

    for (i = 0; i < savedRecipes; i++) {
        var displayedFavorites = [];
        displayedFavorites[i] = document.createElement("li");

        displayedFavorites[i].textContent = localStorage.getItem(localStorage.key(i));
        // document.body.children.children[1].appendChild(displayedFavorites);

        console.log(displayedFavorites[i]);
    }
}
=======
var currentRecipe = "currentRecipe";
var favButton = "favbutton";
var favContainer = "favcontainer";
var localStorageRecipes = ["one", "two", "three", "four"];
var savedRecipes = 5;

// favButton.addEventListener("click", function favRecipe() {

//     localStorage.setItem(localStorageRecipes[savedRecipes], currentRecipe)
//     savedRecipes++;
// });

localStorage.setItem(0, "currentRecipe0");
localStorage.setItem(1, "currentRecipe1");
localStorage.setItem(2, "currentRecipe2");
localStorage.setItem(3, "currentRecipe3");
localStorage.setItem(4, "currentRecipe4");

displayFavorites();

function displayFavorites() {

    for (i = 0; i < savedRecipes; i++) {
        var displayedFavorites = [];
        displayedFavorites[i] = document.createElement("li");

        displayedFavorites[i].textContent = localStorage.getItem(localStorage.key(i));
        // document.body.children.children[1].appendChild(displayedFavorites);

        console.log(displayedFavorites[i]);
    }
}
>>>>>>> 27c7270af470a7a55e652e272f8a3c48b9ee4571
