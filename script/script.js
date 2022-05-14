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
    var listedItems = document.querySelector('#display-items')

    if(copyPaste !== null) {
        
        for(var i = 0; i < userIngredientListItems.length; i++) {
           createDivInput(userIngredientListItems[i])
        }

        function createDivInput (food) {
            var itemsEntered = document.createElement('div')
            var enterText = document.createElement('h3')

            enterText.textContent = userIngredientListItems.slice(-1)
            console.log(userIngredientListItems.slice(-1))

            listedItems.append(itemsEntered)
            listedItems.append(enterText)
        }
    }
}
