var ingredientList = document.querySelector('#inputIngredientsList');
var generate = document.querySelector('#generateButton');
var listedItems = document.querySelector('#display-items')
var clearButton = document.querySelector('#clearButton')

var userIngredientListItems = []
var loStoKeySelect = 0;

generate.addEventListener('click', enterButton);
clearButton.addEventListener('click', clearAll)

function enterButton() {
    var userInput = document.querySelector('input').value;
    
    if(document.getElementById('inputIngredientsList').value.length == 0) {
        alert('blank');

    }else {
        ingredientList.value = ""

        var listedItems = document.querySelector('#display-items');

        var itemsEntered = document.createElement('div');
        var enterText = document.createElement('h3');
        itemsEntered.setAttribute("id", "listed-ing");
    
        enterText.textContent = userInput;
    
        var deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'btn-close')
        deleteButton.setAttribute('aria-label', 'Close')

        listedItems.append(itemsEntered);
        itemsEntered.append(enterText);
        itemsEntered.append(deleteButton);

        localStorage.setItem(loStoKeySelect, JSON.stringify(userInput));
        loStoKeySelect++;
        renderMessage()

        deleteButton.addEventListener('click', function(event) {
            console.log(event.target)
            event.target.parentElement.remove()
        })
    }
}

function clearAll () {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    ingredientList.value = ""
    removeAllChildNodes(listedItems);
}

function renderMessage() {
    var copyPaste = JSON.parse(localStorage.getItem("userIngredientListItems"));
    var listedItems = document.querySelector('#display-items')

    if(copyPaste !== null) {
        var x = 0
        
        createList(userIngredientListItems[x])

        function createList (food) {
        }

        x++   
    }
}
