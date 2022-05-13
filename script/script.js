var ingredientList = document.querySelector('#inputIngredientsList')
var generate = document.querySelector('#generateButton')
var ulItems = document.querySelector('#ulItems')
userIngredientListItems = []


generate.addEventListener('click', enterButton);


function enterButton() {
    var userInput = document.querySelector('input').value
    
        if(document.getElementById('inputIngredientsList').value.length == 0) {
             alert('blank')

            
        }else {
            userIngredientListItems.push(userInput);
            localStorage.setItem("userIngredientListItems", JSON.stringify(userInput))
            renderMessage()
        }
}

function renderMessage() {
    var copyPaste = JSON.parse(localStorage.getItem("userIngredientListItems"));

    if(copyPaste !== null) {
        
        for(i = 0; i < copyPaste.length; i++) {
            var listedItems = document.querySelector('#display-items')
            var itemsEntered = document.createElement('div')

            itemsEntered = copyPaste[i]

            itemsEntered.textContent = copyPaste
            listedItems.appendChild(itemsEntered)
        }
        
    }
}