var ingredientList = document.querySelector('#saved-ingredients');
var generate = document.querySelector('#generateButton');
var ulItems = document.querySelector('#ulItems');
var userInput = document.querySelector('#ingInput')
var deleteBtns = document.querySelectorAll('.deleteIngBtn')

userIngredientListItems = [];


generate.addEventListener('click', getIng);


function sendIng(allIngArr) {
    var queryString = '../main/recipe-page.html?ing='

    for (i = 0; i < allIngArr.length; i++) {
        if (i == (allIngArr.length)-1){
            console.log('test')
            queryString = queryString + allIngArr[i]
        } else {
            console.log('test')

            queryString = queryString + allIngArr[i] +','
        }
    }
    console.log(queryString);

    location.assign(queryString);
}

function getIng() {
    var allIng = (document.querySelectorAll('.ingTextEl'))
    var allIngArr = [];
    for (var i = 0; i < allIng.length; i++) {
        allIngArr.push($(allIng[i]).text())
    }
    console.log(allIngArr)

    sendIng(allIngArr)


}

function renderIngList(ingName) {
    var ingDiv = document.createElement('div')
    ingDiv.classList.add('ingList')

    var deleteBtn = document.createElement('button')
    $(deleteBtn).text('X')
    $(deleteBtn).attr({
        type: 'button',
        class: 'deleteIngBtn'
    })

    var ingTextEl = document.createElement('h4')
    
    ingTextEl.classList.add('ingTextEl')

    ingTextEl.innerHTML = ingName

    ingDiv.append(deleteBtn, ingTextEl);

    ingredientList.append(ingDiv);
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

$( "#ingForm" ).submit(function(event) {
    event.preventDefault();
    renderIngList(userInput.value);
    userInput.value = '';
});

$(document).on('click','.deleteIngBtn',function(){
    $(this.parentElement).remove();
})