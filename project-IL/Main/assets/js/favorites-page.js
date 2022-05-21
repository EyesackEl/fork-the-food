var homeBtn = document.querySelector('#home')

console.log(localStorage.length);

function deleteFav() {
    console.log(this)
    console.log('test')
}

function displayFavorites() {
    var savedFavoritesContainerHeader = document.querySelector('.saved-favorites-h3');

    if(localStorage.length = 0){
        savedFavoritesContainerHeader.textContent = "No favorites saved!"
    }else{
        for(i = 0; i < localStorage.length; i++){
            var listedItems = document.querySelector('#display-items');
            var listItemWrap = document.createElement('div');
            var savedRecipe = document.createElement('div');
            var deleteBtn = document.createElement('button')
            savedRecipe.setAttribute("id", "listed-recipe");

            deleteBtn.setAttribute('type', 'button')

            deleteBtn.innerHTML = 'X'
            
            listItemWrap.className += 'row'
            
            savedRecipe.className += 'listed-recipe recipeDiv col-md-8'
            deleteBtn.className += 'deleteBtn col-md-4'
            
            listedItems.append(listItemWrap);
            getRecipeName(localStorage.getItem(localStorage.key(i)), savedRecipe, deleteBtn, listItemWrap)

            console.log(localStorage.getItem(localStorage.key(i)));

            savedRecipe.setAttribute('data-localPos', i);
            deleteBtn.setAttribute('data-localPos', i);

        }
    }
}


function getRecipeName(recipeId, savedRecipe, deleteBtn, listItemWrap) {
    var recQueryUrl = 'https://api.spoonacular.com/recipes/' + recipeId +'/information?apiKey=db6b592f0de5425ab610ae7dcb887346'

    fetch(recQueryUrl) 
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(infoRes) {
        console.log(infoRes)
        savedRecipe.textContent = infoRes.title;
        savedRecipe.setAttribute('data-id', infoRes.id);
        deleteBtn.setAttribute('data-id', infoRes.id);
        listItemWrap.prepend(deleteBtn, savedRecipe)
    })
}

function sendToRecipe(recipeId) {
    location.assign('./recipe-page.html?id=' + recipeId)
}

$(document).on('click','.listed-recipe',function(){
    console.log(this.getAttribute('data-id'))
    var recipeId = this.getAttribute('data-id');
    sendToRecipe(recipeId)
})

$(document).on('click','.deleteBtn',function() {
    console.log(this.getAttribute('data-localpos'))
    var localPos = this.getAttribute('data-localpos')
    localStorage.removeItem(localPos)
    $(this.parentElement).remove();
})

homeBtn.addEventListener('click', function() {
     location.assign('./home-page.html')
})

displayFavorites();