var userInput = document.getElementById('ingInput')

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
    console.log('test')
    userInput.value = '';
    event.preventDefault();
});