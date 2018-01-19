$(document).ready(function() {
  // Declarando variables
  var inputFld = $('#titleFld');
  var searchBtn = $('#searchBtn');
  var movieList = $('#movieList');
  var arrResults = [];

  // Asociando eventos
  searchBtn.click(handleSearchBtn);

  // Función para hacer la busqueda general
  function handleSearchBtn() {
    var title = inputFld.val();
    console.log(title);
    var url = 'http://www.omdbapi.com/?&apikey=5bb8748d&s=' + encodeURI(title) + '&type=movie';
    $.ajax({
      url: url,
      success: renderMovies
    });
  };

  // Función para mostrar filtrando por genero Sci-fi, Adventure y/o Fantasy
  function renderMovies(response) {
    $('#movieList').empty();
    arrResults = [];

    console.log(response);

    for (var i in response.Search) {
      var movie = response.Search[i];
      var idmovie = movie.imdbID;
      arrResults.push(idmovie);
    }

    console.log(arrResults);



    for (var i = 0; i < arrResults.length; i++) {
      $.getJSON('http://www.omdbapi.com/?&apikey=3a181f1c&i=' + arrResults[i])
        .then(function(response) {
          if ((response.Genre.indexOf('Sci-Fi') !== -1 || response.Genre.indexOf('Adventure') !== -1 || response.Genre.indexOf('Fantasy') !== -1) && response.Genre.indexOf('Animation') === -1) {
            console.log(response);
            var li = $('<div class="list rounded mx-auto d-block col col-sm-4 col-md-4" id="' + response.imdbID + '">');
            var img = $('<img class="rounded mx-auto d-block" src="' + response.Poster + '" with="50px">');
            var title = $('<p> Title: ' + response.Title + '</p>');
            var runtime = $('<p>Runtime: ' + response.Runtime + '</p>');
            var director = $('<p>Director: ' + response.Director + '</p>');
            var tag = $('<p>Genre: ' + response.Genre + '</p>');
            var plot = $('<p>Plot: ' + response.Plot + '</p>');
            var actors = $('<p>Actors: ' + response.Actors + '</p>');

            li.append(img);
            li.append(title);
            li.append(runtime);
            li.append(director);
            li.append(tag);
            li.append(plot);
            li.append(actors);
            movieList.append(li);
          }
        });
    }
  }
});
