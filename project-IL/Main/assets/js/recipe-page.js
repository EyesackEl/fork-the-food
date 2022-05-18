var favBtnEl = document.getElementById('favBtn');
var backBtnEL = document.getElementById('backBtnEL');
var recipeNameEl = document.querySelector('#recName');
var ingListEl = document.querySelector('#ingList');
var recipeLinks = document.querySelectorAll('a');
var recipeImg = document.querySelector('img');

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function init() {
    // var ingList = 'file:///C:/Users/isaac/OneDrive/Desktop/Bootcamp/project-1/project-IL/recipe-page/recipe-page.html?ing=apple,banana,flour,sugar'
    
    var ingList = document.location.search;
    ingList = (ingList.split('='))[1].split(',').join(',+');
    console.log(ingList)
    // ingArr = ingArr[1].split(',');
    getRecipe(ingList);
}

function renderRecipe(infoRes, haveIng) {
    var ingArr = [];
    var haveIngArr = [];
    for (i = 0; i < recipeLinks.length; i++) {
        recipeLinks[i].setAttribute('href', infoRes.sourceUrl)
    }

    recName.innerHTML = '<h5>' + infoRes.title + '</h5>'

    recipeImg.src = infoRes.image 

    for (var i = 0; i < infoRes.extendedIngredients.length; i++) {
        ingArr.push(infoRes.extendedIngredients[i].name)
    }

    for (var i = 0; i < haveIng.length; i++) {
        haveIngArr.push(haveIng[i].name)
    }

    console.log(ingArr)
    console.log(haveIngArr)

    // for (var i = 0; i < ingArr.length; i++) {
    //     for (var j = 0; j < haveIngArr.length; j++ ) {
    //         if (ingArr[i] === haveIngArr[j]) {
    //             var ingListItem = document.createElement('li');
    //             $(ingListItem).text(ingArr[i])
    //             $(ingListItem).css('color', 'green')
    //             console.log(ingArr[i])
    //         } else {
    //             var ingListItem = document.createElement('li');
    //             $(ingListItem).text(ingArr[i])
    //         }
    //     }
    //     ingListEl.append(ingListItem)
    // }

    for (var i = 0; i < ingArr.length; i++) {
    var ingListItem = document.createElement('li');
    $(ingListItem).text(ingArr[i])
    ingListEl.append(ingListItem)
    }

    
}

// fetches and returns an id of a recipe with matching ingredients
function getRecipe(ingList) {
    var recipeQueryUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=8d40068b6a7e40cd931a1e0999d491bb&ingredients=' + ingList;

    fetch(recipeQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then (function (recipeRes) {
            console.log(recipeRes);

            var chosenRecipeNum = getRandom(recipeRes.length);

            var recipeId = recipeRes[chosenRecipeNum].id;

            var haveIng = recipeRes[chosenRecipeNum].usedIngredients
            console.log(recipeId);
            getRecipeInfo(recipeId, haveIng)
            
        })
}

// fetches the recipe with the corresponding ID sends it to the function that handles rendering
function getRecipeInfo(recipeId, haveIng) {
    var infoQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId +'/information?apiKey=8d40068b6a7e40cd931a1e0999d491bb'

    fetch(infoQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function(infoRes) {
            console.log(infoRes)
            renderRecipe(infoRes, haveIng)
        })
}

init();