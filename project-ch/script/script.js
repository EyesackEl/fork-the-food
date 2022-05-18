var ingredientList = document.querySelector('#inputIngredientsList');
var generate = document.querySelector('#generateButton');
var listedItems = document.querySelector('#display-items')
var clearButton = document.querySelector('#clearButton')

var userIngredientListItems = []
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
        renderMessage()
    }
}

function renderMessage() {
    var copyPaste = JSON.parse(localStorage.getItem("userIngredientListItems"));
    var listedItems = document.querySelector('#display-items')

    if(copyPaste !== null) {
        var x = 0
        
        createList(userIngredientListItems[x])

        function createList (food) {
            var li = document.createElement('li')

            var enterText = document.createElement('h4')
            var deleteButton = document.createElement('button')

    
            enterText.setAttribute('style', 'border: 2px solid black')
            enterText.setAttribute('style', 'padding: 20px')
            enterText.setAttribute('style', 'list-style: none')
            
            deleteButton.setAttribute('class', 'btn-close')
            deleteButton.setAttribute('aria-label', 'Close')

            enterText.textContent = userIngredientListItems.slice(-1)


            li.appendChild(deleteButton)
            li.appendChild(enterText)
        
            listedItems.appendChild(li)

           
        }
        x++
    }
}
listedItems.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches('button') === true) {
        var index = element.parentElement.getAttribute('data-index')
        userIngredientListItems.splice(index, 1) 
        renderMessage();
    }
})
