'use strict';

// Need to filter out duplicates

function submit() {
  var term = document.getElementById('input').value;

  var apiUrl = 'http://api.pearson.com/v2/dictionaries/entries?headword=' + term;

  $.ajax({
    url: apiUrl,
    headers: { "Accept": "application/json" },
    type: "GET"
  }).done(function (json) {

    for (var i = 0; i < json.results.length; i++) {
      if (json.results[i].senses[0].definition != undefined) {
        $('ul').append("<li><span id='word'>" + json.results[i].headword + "</span><br> <span id='partOfSpeech'>" + json.results[i].part_of_speech + "</span><br> <span id='definition'>" + json.results[i].senses[0].definition + "</li>");
      }
    };
  }).fail(function (error) {
    console.log(error);
  });
};

function reset() {
  document.getElementById('results').innerHTML = "";
}