$(document).ready(function() {
  var $moviePoster = $('#movie-poster');
  var $movieTitle = $('#movie-title');
  var $movieDuration = $('#movie-duration');
  var $movieDirector = $('#movie-director');
  var $moviePlot = $('#plot-content');
  var arrGenre = [];
  var arrActors = [];

  var addBtn = $('#btn-add');
  var historyBtn = $('#btn-history');
  var likeBtn = $('#thumb-up');

  addBtn.on('click', addToWatchlist);
  historyBtn.on('click', addToHistory);
  likeBtn.on('click', likeRating);

  var url = 'http://www.omdbapi.com/?&apikey=3a181f1c&i=' + localStorage.selectedMovieID;
  console.log(url);
  $.ajax({
    url: url,
    success: displayMovieInfo
  });

  function displayMovieInfo(response) {
    console.log(response);
    if (response.Poster !== 'N/A') {
      $moviePoster.attr('src', response.Poster);
    } else {
      $moviePoster.attr('src', '../assets/images/not-picture.svg');
    }

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

  /* FUNCIÓN QUE AÑADE PELÍCULAS A RAMA FIREBASE WATCHLIST */
  function addToWatchlist() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const key = firebase.database().ref().push().key;
        firebase.database().ref('watchlist/' + user.uid).push({
          movie: localStorage.selectedMovieID,
          key: key
        });
        console.log('added movie.');
      } else {
        console.log('failed.');
      }
    });
  }

  function addToHistory() {
    // Variable del ícono para agregar a lista de películas ya vistas
    // Obteniendo contenido textual de los id en localStorage
    // localStorage.moviePosterHistory = $('#movie-poster').attr('src');
    // localStorage.movieTitleHistory = $('#movie-title').text();
    // localStorage.movieDurationHistory = $('#movie-duration').text();
    // localStorage.releaseYearHistory = $('#release-year').text();
    // localStorage.movieDirectorHistory = $('#movie-director').text();
    // localStorage.movieTag1History = $('#movie-tag-1').text();
    // localStorage.movieTag2History = $('#movie-tag-2').text();
    // localStorage.movieTag3History = $('#movie-tag-3').text();
    // localStorage.plotContentHistory = $('#plot-content').text();
    // localStorage.cast1History = $('#cast-1').text();
    // localStorage.cast2History = $('#cast-2').text();
    // localStorage.cast3History = $('#cast-3').text();
    // localStorage.cast4History = $('#cast-4').text();
    // localStorage.cast5History = $('#cast-5').text();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const key = firebase.database().ref().push().key;
        firebase.database().ref('history/' + user.uid).push({
          movie: localStorage.selectedMovieID,
          key: key
        });
        console.log('added movie.');
      } else {
        console.log('failed.');
      }
    });
  }

  /* FUNCIÓN PARA DAR LIKE Y QUITAR LIKE CON COLOR */
  function likeRating() {
    // Variable del ícono para compartir películas
    likeBtn.addClass('hand-color');
  }

  function likeToggle(x) {
    x.classList.toggle('fa-thumbs-down');
  }
});
