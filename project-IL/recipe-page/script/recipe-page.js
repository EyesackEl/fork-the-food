var favBtnEl = document.getElementById('favBtn');
var backBtnEL = document.getElementById('backBtnEL');

var recipeLinks = document.querySelectorAll('a');
var recipeImg = document.querySelector('img');

console.log(recipeLinks)

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function getIng() {
    var ingList = 'file:///C:/Users/isaac/OneDrive/Desktop/Bootcamp/project-1/project-IL/recipe-page/recipe-page.html?ing=apple,banana,flour,sugar'
    // var ingList = document.location.search.split('?');
    ingList = (ingList.split('='))[1].split(',').join(',+');
    console.log(ingList)
    // ingArr = ingArr[1].split(',');
    // console.log(ingArr)
    getRecipe(ingList);
}

function renderRecipe(infoRes) {
    for (i = 0; i < recipeLinks.length; i++) {
        recipeLinks[i].setAttribute('href', infoRes.sourceUrl)
    }

    recipeImg.src = infoRes.image 

}

// fetches and returns an id of a recipe with matching ingredients
function getRecipe(ingList) {
    var recipeQueryUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=806c344810ec4b04aedcec77db04b143&ingredients=' + ingList;

    fetch(recipeQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then (function (recipeRes) {
            console.log(recipeRes);

            var chosenRecipe = getRandom(recipeRes.length);

            recipeId = recipeRes[chosenRecipe].id;
            console.log(recipeId);
            getRecipeInfo(recipeId)
        })
}

// fetches the recipe with the corresponding ID sends it to the function that handles rendering
function getRecipeInfo(recipeId) {
    var infoQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId +'/information?apiKey=806c344810ec4b04aedcec77db04b143'
    console.log(infoQueryUrl)

    fetch(infoQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function(infoRes) {
            console.log(infoRes)
            renderRecipe(infoRes)
        })
}

// fetches and returns a list of a specified recipes name, ingredients, and picture.
// function getRecipe(recipeId) {
//     var recipeQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId + '/information'
//     fetch(recipeQueryUrl) 
//         .then(function(response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then (function (recipeRes) {
//             console.log(recipeRes)
//             var recipeName = recipeRes.title
//             var recipeImage = recipeRes.image
//         })
// }

getIng();