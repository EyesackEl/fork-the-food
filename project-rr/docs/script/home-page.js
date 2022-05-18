var ingredientList = document.querySelector('#ingredient-input');
var addIng = document.querySelector('#ingInput');
var ulItems = document.querySelector('#ulItems');
var loStoKeySelect = 0;

addIng.addEventListener('click', enterButton);


function enterButton() {
    var userInput = document.querySelector('input').value;
    
    if(document.getElementById('ingredient-input').value.length == 0) {
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


$( function() {
    var availableTags = [
      "Apple",
      "Banana",
      "Flour",
      "Salt",
      "Pepper"
    ];

    $( "#ingInput" ).autocomplete({
      source: availableTags
    });
  });
