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
  // Agregar información a ubicaciones en elementos
  movieTitleWatchList.text(localStorage.movieTitleWatchList);
  moviePlotWatchList.text(localStorage.plotContentWatchList);
}

/* FUNCIÓN PARA IMPRIMIR LA LISTA DE PELÍCULAS EN HISTORY*/
function printMovieInfoHistory() {
  // Obtener elementos
  var movieTitleHistory = $('#movie-title-history');
  var moviePlotHistory = $('#movie-plot-history');
  // Agregar información a ubicaciones en elementos
  movieTitleHistory.text(localStorage.movieTitleHistory);
  moviePlotHistory.text(localStorage.plotContentHistory);
}

/* FUNCIÓN PARA ELIMINAR UNA PELÍCULA DE WATCHLIST */
function deleteMovieWatchList() {
  // Obtener elementos de ícono de tacho de basura y caja envolvente de información de película en Watchlist
  var trashBinWatchList = $('#trash-icon-wrapper-watchlist');
  var movieInfoWrapperWatchlist = ('#movie-info-wrapper-watchlist');
  // evento de clic para eliminar la caja envolvente de unformación de película en Watchlist
  $(trashBinWatchList).on('click', function() {
    $(movieInfoWrapperWatchlist).remove();
  });
}

/* FUNCIÓN PARA ELIMINAR UNA PELÍCULA DE HISTORY */
function deleteMovieHistory() {
  // Obtener elementos de ícono de tacho de basura y caja envolvente de información de película en History
  var trashBinHistory = $('#trash-icon-wrapper-history');
  var movieInfoWrapperHistory = ('#movie-info-wrapper-history');
  // evento de clic para eliminar la caja envolvente de unformación de película en Watchlist
  $(trashBinHistory).on('click', function() {
    $(movieInfoWrapperHistory).remove();
  });
}

$(document).ready(begin);
