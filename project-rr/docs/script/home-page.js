var ingredientList = document.querySelector('#inputIngredientsList');
var generate = document.querySelector('#generateButton');
var ulItems = document.querySelector('#ulItems');
userIngredientListItems = [];


generate.addEventListener('click', enterButton);


function enterButton() {
    var userInput = document.querySelector('input').value;
    
        if(document.getElementById('inputIngredientsList').value.length == 0) {
            alert('blank');

        }else {
            userIngredientListItems.push(userInput);
            localStorage.setItem("userIngredientListItems", JSON.stringify(userInput))
            renderMessage();
        }
}

function renderMessage() {
    var copyPaste = JSON.parse(localStorage.getItem("userIngredientListItems"));
    var listedItems = document.querySelector('#display-items');

    if(copyPaste !== null) {
        var x = 0;
        
        createDivInput(userIngredientListItems[x]);

        function createDivInput (food) {
            var itemsEntered = document.createElement('div');
            var enterText = document.createElement('h3');

            itemsEntered.setAttribute("id", "listed-ing");

            enterText.textContent = userIngredientListItems.slice(-1);
            console.log(userIngredientListItems.slice(-1));

            listedItems.append(itemsEntered);
            itemsEntered.append(enterText);
        }
        x++;
    }
}