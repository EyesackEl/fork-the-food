var favBtnEl = document.getElementById('favBtn');
var favPageEl = document.querySelector('#favPageBtn')
var homeBtnEl = document.querySelector('#homeBtn');
var recipeNameEl = document.querySelector('#recName');
var ingListEl = document.querySelector('#display-items');
var recipeLinks = document.querySelectorAll('a');
var recipeImg = document.querySelector('img');
var numberCounter = localStorage.length;
var recipeId

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
        console.log(infoRes)
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
        var ingListWrap = document.createElement('div')
        var ingListItem = document.createElement('h3');

        ingListWrap.setAttribute('id', 'listed-ing')
        // Cross references users inputted ingredients with the ingredients the recipe uses
        //and makes them render a different color
        for (var j = 0; j < haveIngArr.length; j++ ) {
            if (ingArr[i] === haveIngArr[j]) {
                $(ingListItem).css('color', 'green');
            }
        }

        // $(ingListItem).css('list-style-position', 'inside');

        $(ingListItem).text(ingArr[i])
        ingListWrap.append(ingListItem)
        ingListEl.append(ingListWrap)
    }

    
}

function getYoutubeVid(recName) {
    var youtubeQueryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAYV9cvdG_Bh9ic8g3BQJg4WrdapgWG3gQ&type=video&q=" + recName;

    fetch(youtubeQueryUrl)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function(youtubeRes) {
            console.log(youtubeRes)
            var chosenVideoId = youtubeRes.items[getRandom((youtubeRes.items).length)].id.videoId
            console.log(chosenVideoId)
            player.loadVideoById(chosenVideoId)
        })
}

// Fetches the recipe with the corresponding ID sends it to the function that handles rendering
function getRecipeInfo(recipeId, haveIng) {
    var infoQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId +'/information?apiKey=db6b592f0de5425ab610ae7dcb887346'
    console.log(infoQueryUrl)
    fetch(infoQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function(infoRes) {
            console.log(infoRes)
            renderRecipe(infoRes, haveIng)
            getYoutubeVid(infoRes.title)
        })
}

// Fetches and returns an id of a recipe with matching ingredients
function getRecipe(ingList) {
    var recipeQueryUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=db6b592f0de5425ab610ae7dcb887346&ingredients=' + ingList;

    fetch(recipeQueryUrl) 
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then (function (recipeRes) {
            console.log(recipeRes);

            var chosenRecipeNum = getRandom(recipeRes.length);

            recipeId = recipeRes[chosenRecipeNum].id;

            var haveIng = recipeRes[chosenRecipeNum].usedIngredients

            console.log(recipeId);

            getRecipeInfo(recipeId, haveIng);            
        })
}


// YouTube video rendering
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '250',
        width: '500',
        videoId: '5Peo-ivmupE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

favPageEl.addEventListener('click', function() {
    location.assign('./favorites.html')
})

// Sends user back to the home page when 'fork another food' button is pressed
homeBtnEl.addEventListener('click', function() {
    location.assign('./index.html')
})

// Handles adding a recipe to the favorites list
favBtnEl.addEventListener('click', function () {
    console.log(recipeId)
    localStorage.setItem(numberCounter, recipeId)
    console.log(localStorage.getItem(localStorage.key(numberCounter)));
    document.documentElement.style.setProperty('--favtext', 'asdasdasda')
})

init();