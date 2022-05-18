var ingredientList = document.querySelector('#inputIngredientsList');
var generate = document.querySelector('#generateButton');
var ulItems = document.querySelector('#ulItems');
var loStoKeySelect = 0;

generate.addEventListener('click', enterButton);


function enterButton() {
    var userInput = document.querySelector('input').value;
    
    if(document.getElementById('inputIngredientsList').value.length == 0) {
        alert('blank');

    }else {
        var listedItems = document.querySelector('#display-items');

        var itemsEntered = document.createElement('div');
        var enterText = document.createElement('h3');
        itemsEntered.setAttribute("id", "listed-ing");
    
        enterText.textContent = userInput;
    
        listedItems.append(itemsEntered);
        itemsEntered.append(enterText);

        localStorage.setItem(loStoKeySelect, JSON.stringify(userInput));
        loStoKeySelect++;
    }
}