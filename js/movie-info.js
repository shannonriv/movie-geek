function begin() {
  addToWatchList();
  addToHistory();
  shareMovie();
}

function addToWatchList() {
  // Variable del ícono para agregar a lista de películas por ver luego
  var addBtn = $('#btn-add');
  console.log(addBtn);
  $(addBtn).on('click', function() {
    // Obteniendo contenido textual de los id en localStorage
    localStorage.moviePoster = $('#movie-poster').attr('src');
    console.log(localStorage.moviePoster);
    localStorage.movieTitleWatchList = $('#movie-title').text();
    localStorage.movieDurationWatchList = $('#movie-duration').text();
    localStorage.releaseYearWatchList = $('#release-year').text();
    localStorage.movieDirectorWatchList = $('#movie-director').text();
    localStorage.movieTag1WatchList = $('#movie-tag-1').text();
    localStorage.movieTag2WatchList = $('#movie-tag-2').text();
    localStorage.movieTag3WatchList = $('#movie-tag-3').text();
    localStorage.plotContentWatchList = $('#plot-content').text();
    localStorage.cast1WatchList = $('#cast-1').text();
    localStorage.cast2WatchList = $('#cast-2').text();
    localStorage.cast3WatchList = $('#cast-3').text();
    localStorage.cast4WatchList = $('#cast-4').text();
    localStorage.cast5WatchList = $('#cast-5').text();
    // Redirección a página de perfil de usuario
    // window.location.href = '../views/user-profile.html';
  });
}

function addToHistory() {
  // Variable del ícono para agregar a lista de películas ya vistas
  var historyBtn = $('#btn-history');
  console.log(historyBtn);
  $(historyBtn).on('click', function() {
    // Obteniendo contenido textual de los id en localStorage
    // localStorage.moviePoster = $('#movie-poster').text();
    localStorage.movieTitleHistory = $('#movie-title').text();
    localStorage.movieDurationHistory = $('#movie-duration').text();
    localStorage.releaseYearHistory = $('#release-year').text();
    localStorage.movieDirectorHistory = $('#movie-director').text();
    localStorage.movieTag1History = $('#movie-tag-1').text();
    localStorage.movieTag2History = $('#movie-tag-2').text();
    localStorage.movieTag3History = $('#movie-tag-3').text();
    localStorage.plotContentHistory = $('#plot-content').text();
    localStorage.cast1History = $('#cast-1').text();
    localStorage.cast2History = $('#cast-2').text();
    localStorage.cast3History = $('#cast-3').text();
    localStorage.cast4History = $('#cast-4').text();
    localStorage.cast5History = $('#cast-5').text();
    // Redirección a página de perfil de usuario
    // window.location.href = '../views/user-profile.html';
  });
}

function shareMovie() {
  // Variable del ícono para compartir películas
  var shareBtn = $('#btn-share');
  console.log(shareBtn);
}

$(document).ready(begin);
