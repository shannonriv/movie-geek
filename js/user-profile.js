function begin() {
  printMovieInfoWatchList();
  printMovieInfoHistory();
  deleteMovieWatchList();
  deleteMovieHistory();
}

/* FUNCIÓN PARA IMPRIMIR LA LISTA DE PELÍCULAS EN WATCHLIST*/
function printMovieInfoWatchList() {
  // Obtener elementos
  var movieTitleWatchList = $('#movie-title-watchlist');
  var moviePlotWatchList = $('#movie-plot-watchlist');
  var moviePosterWatchlist =
  $('#movie-poster-watchlist');
  // Agregar información a ubicaciones en elementos
  movieTitleWatchList.text(localStorage.movieTitleWatchList);
  moviePlotWatchList.text(localStorage.plotContentWatchList);
  moviePosterWatchlist.attr('src', localStorage.moviePosterWatchList);
}

/* FUNCIÓN PARA IMPRIMIR LA LISTA DE PELÍCULAS EN HISTORY*/
function printMovieInfoHistory() {
  // Obtener elementos
  var movieTitleHistory = $('#movie-title-history');
  var moviePlotHistory = $('#movie-plot-history');
  var moviePosterHistory = $('#movie-poster-history');
  // Agregar información a ubicaciones en elementos
  movieTitleHistory.text(localStorage.movieTitleHistory);
  moviePlotHistory.text(localStorage.plotContentHistory);
  moviePosterHistory.attr('src', localStorage.moviePosterHistory);
}

/* FUNCIÓN PARA ELIMINAR UNA PELÍCULA DE WATCHLIST */
function deleteMovieWatchList() {
  // Obtener elementos de ícono de tacho de basura y caja envolvente de información de película en Watchlist
  var trashBinWatchList = $('.trash-icon-wrapper-watchlist');
  var movieInfoWrapperWatchlist = ('#movie-info-wrapper-watchlist');
  // evento de clic para eliminar la caja envolvente de unformación de película en Watchlist
  $(trashBinWatchList).on('click', function() {
    $(this).parent().parent().parent().remove();
  });
}

/* FUNCIÓN PARA ELIMINAR UNA PELÍCULA DE HISTORY */
function deleteMovieHistory() {
  // Obtener elementos de ícono de tacho de basura y caja envolvente de información de película en History
  var trashBinHistory = $('.trash-icon-wrapper-history');
  var movieInfoWrapperHistory = ('#movie-info-wrapper-history');
  // evento de clic para eliminar la caja envolvente de unformación de película en Watchlist
  $(trashBinHistory).on('click', function() {
    $(this).parent().parent().parent().remove();
  });
}

/* FUNCIÓN PARA IMPRIMIR CAJAS ENVOLVENTES CON INFORMACIÓN DE PELÍCULA */


// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC3hqRINXbqnNd0V5orGP-say7b414Gems',
  authDomain: 'movie-geek-8b595.firebaseapp.com',
  databaseURL: 'https://movie-geek-8b595.firebaseio.com',
  projectId: 'movie-geek-8b595',
  storageBucket: 'movie-geek-8b595.appspot.com',
  messagingSenderId: '535112578744'
};
/* FIREBASE */
// Referencia
// firebase.database().ref('users/' + user.uid + 'watchList');
// set/push

$(document).ready(begin);
