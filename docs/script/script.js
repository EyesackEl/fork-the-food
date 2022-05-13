

// fetches and returns a list of a specified recipes name, ingredients, and picture.
function getRecipe() {
    var recipeQueryUrl = 'https://api.spoonacular.com/findByIngredients?ingredients='
    for (i = 0; i < ingList; i++) {
        recipeQueryUrl = recipeQueryUrl + ingList[i] +',+';
    }
    recipeQueryUrl = recipeQueryUrl
    var recipeQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId + '/information'
    fetch(recipeQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then (function (recipeRes) {
            console.log(recipeRes)
            var recipeName = recipeRes.title
            var recipeImage = recipeRes.image
        })
}

function getIngredient() {

}

function renderIngredient() {

}

$('#ingForm').submit(getIngredient)