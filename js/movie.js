$(document).ready(function() {
  var $moviePoster = $('#movie-poster');
  var $movieTitle = $('#movie-title');
  var $movieDuration = $('#movie-duration');
  var $movieDirector = $('#movie-director');
  var $moviePlot = $('#plot-content');
  var arrGenre = [];
  var arrActors = [];

  var url = 'http://www.omdbapi.com/?&apikey=3a181f1c&i=' + localStorage.selectedMovieID;
  console.log(url);
  $.ajax({
    url: url,
    success: displayMovieInfo
  });

  function displayMovieInfo(response) {
    console.log(response);
    $moviePoster.attr('src', response.Poster);
    $movieTitle.text(response.Title);
    $movieDuration.html('<i class="fa fa-clock-o" aria-hidden="true"></i> <span>' + response.Runtime + '</span>');
    $movieDirector.html('<i class="fa fa-film" aria-hidden="true"></i> <span>' + response.Director + '</span>');
    $moviePlot.text(response.Plot);
    arrActors = (response.Actors).split(', ');
    arrGenre = (response.Genre).split(', ');
    for (var i = 0; i < arrActors.length; i++) {
      console.log(arrActors[i]);
      $('.actors').append('<span class="d-inline-block mr-2 mb-2">' + arrActors[i] + '</span>');
    }

    for (var i = 0; i < arrGenre.length; i++) {
      $('.movie-tags').append('<span class="d-inline-block px-1 mr-2 mb-2 tag text-uppercase">' + arrGenre[i] + '</span>');
    }
  }
});