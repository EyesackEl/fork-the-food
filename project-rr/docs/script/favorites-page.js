// favButton.addEventListener("click", function favRecipe() {

//     localStorage.setItem(localStorageRecipes[savedRecipes], currentRecipe)
//     savedRecipes++;
// });
localStorage.setItem(0, "test saved favorite1");
localStorage.setItem(1, "test saved favorite2");
localStorage.setItem(2, "test saved favorite3");
localStorage.setItem(3, "test saved favorite4");
localStorage.setItem(4, "test saved favorite5");


displayFavorites();
console.log(localStorage.length);
function displayFavorites() {
    var savedFavoritesContainerHeader = document.querySelector('.saved-favorites-h3');

    if(!localStorage){
        savedFavoritesContainerHeader.textContent = "No favorites saved!"
    }else{
        for(i = 0; i < localStorage.length; i++){
            var listedItems = document.querySelector('#display-items');
            var savedRecipe = document.createElement('button');
            var recipeText = document.createElement('h3');
            savedRecipe.setAttribute("id", "listed-recipe");
          
            savedRecipe.textContent = localStorage.getItem(localStorage.key(i));

            console.log(localStorage.getItem(localStorage.key(i)));

            listedItems.prepend(savedRecipe);
        }
    }
}
