var favBtnEl = document.getElementById('favBtn');
var homeBtnEl = document.querySelector('#homeBtn');
var recipeNameEl = document.querySelector('#recName');
var ingListEl = document.querySelector('#ingList');
var recipeLinks = document.querySelectorAll('a');
var recipeImg = document.querySelector('img');

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

// Decides whether to render the recipe via ingredients or recipeID
function init() {
    // var searchParams = 'file:///C:/Users/isaac/OneDrive/Desktop/Bootcamp/project-1/project-IL/main/recipe-page.html?id=716433';
    var searchParams = document.location.search;
    if (searchParams.includes('id')) {
        var recipeId = (searchParams.split('='))[1];
        var haveIng = [];
        getRecipeInfo(recipeId, haveIng);
    } else {
        var ingList = (searchParams.split('='))[1].split(',').join(',+');
        getRecipe(ingList);
    }

}

// Handles all rendering
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



    for (var i = 0; i < ingArr.length; i++) {
        var ingListItem = document.createElement('li');

        // Cross references users inputted ingredients with the ingredients the recipe uses
        //and makes them render a different color
        for (var j = 0; j < haveIngArr.length; j++ ) {
            if (ingArr[i] === haveIngArr[j]) {
                $(ingListItem).css('color', 'green');
            }
        }

        // $(ingListItem).css('list-style-position', 'inside');

        $(ingListItem).text(ingArr[i])
        
        ingListEl.append(ingListItem)
    }

    
}

// Fetches the recipe with the corresponding ID sends it to the function that handles rendering
function getRecipeInfo(recipeId, haveIng) {
    var infoQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId +'/information?apiKey=10ac6b34fd89405ea77249343be0c034'

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

// Fetches and returns an id of a recipe with matching ingredients
function getRecipe(ingList) {
    var recipeQueryUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=10ac6b34fd89405ea77249343be0c034&ingredients=' + ingList;

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

            getRecipeInfo(recipeId, haveIng);            
        })
}

// Sends user back to the home page when 'fork another food' button is pressed
homeBtnEl.addEventListener('click', function() {
    location.assign('./home-page.html')
})

// Handles adding a recipe to the favorites list
favBtnEl.addEventListener('click', function () {
    
})

init();