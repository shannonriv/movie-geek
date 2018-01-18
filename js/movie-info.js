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
    // Obteniendo contenido textutal de los id en localStorage
    // localStorage.moviePoster = $('#movie-poster').text();
    localStorage.movieTitle = $('#movie-title').text();
    localStorage.movieDuration = $('#movie-duration').text();
    localStorage.releaseYear = $('#release-year').text();
    localStorage.movieDirector = $('#movie-director').text();
    localStorage.movieTag1 = $('#movie-tag-1').text();
    localStorage.movieTag2 = $('#movie-tag-2').text();
    localStorage.movieTag3 = $('#movie-tag-3').text();
    localStorage.plotContent = $('#plot-content').text();
    localStorage.cast1 = $('#cast-1').text();
    localStorage.cast2 = $('#cast-2').text();
    localStorage.cast3 = $('#cast-3').text();
    localStorage.cast4 = $('#cast-4').text();
    localStorage.cast5 = $('#cast-5').text();
  });
}

function addToHistory() {
  // Variable del ícono para agregar a lista de películas ya vistas
  var historyBtn = $('#btn-history');
  console.log(historyBtn);
}

function shareMovie() {
  // Variable del ícono para compartir películas
  var shareBtn = $('#btn-share');
  console.log(shareBtn);
}

$(document).ready(begin);
