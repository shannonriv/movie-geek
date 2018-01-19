function begin() {
  var trashBinWatchList = $('.trash-icon-wrapper-watchlist');
  var trashBinHistory = $('.trash-icon-wrapper-history');
  var id = '';
  var key = '';

  printMovieInfoWatchList();
  printMovieInfoHistory();
  deleteMovieWatchList();
  deleteMovieHistory();


  /* FUNCIÓN PARA IMPRIMIR LA LISTA DE PELÍCULAS EN WATCHLIST*/
  function printMovieInfoWatchList() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // Referencia a rama de Firebase
        var watchlistRef = firebase.database().ref('watchlist/' + user.uid);

        watchlistRef.on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            id = childSnapshot.val().movie;
            // console.log(id);
            var url = 'http://www.omdbapi.com/?&apikey=3a181f1c&i=' + id;
            $.ajax({
              url: url,
              success: displayWatchlist
            });
          });
        });
      }
    });
  }

  // Función para mostrar las películas en watchlist
  function displayWatchlist(response) {
    var movieID = response.imdbID;
    console.log(movieID);

    var watchlistBox = '<div class="box-shadow d-flex p-2" id="' + movieID + `">
                          <div class="row no-gutters">
                            <div class="col-3">
                              <figure>
                                <img src="` + response.Poster + `" alt="movie-poster" class="img-fluid">
                              </figure>
                            </div>
                            <div class="col-8">
                              <div class="p-2">
                                <h5 class="title-movie">` + response.Title + `</h5>
                                <p class="">` + response.Plot + `</p>
                              </div>
                            </div>
                            <div class="col-1">
                              <div class="p-2 text-center trash-icon-wrapper-watchlist">
                                <a href="#">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>`;
    console.log(watchlistBox);

    $('#watchlist').append(watchlistBox);
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
    var movieInfoWrapperWatchlist = ('#movie-info-wrapper-watchlist');
    // evento de clic para eliminar la caja envolvente de unformación de película en Watchlist
    $(document).on('click', trashBinWatchList, function(event) {
      var target = $(event.target).closest('div');
      if (target.hasClass('trash-icon-wrapper-watchlist')) {
        console.log(target.parent().parent().parent().attr('id'));
        // firebase.auth().onAuthStateChanged(function(user) {
        //   if (user) {
        //     var watchlistRef = firebase.database().ref('watchlist/' + user.uid + '/' + target.parent().parent().parent().attr('id'));
        //     console.log(watchlistRef);
        //   }
        target.parent().parent().parent().remove();
      }
    });
  }
  // }

  /* FUNCIÓN PARA ELIMINAR UNA PELÍCULA DE HISTORY */
  function deleteMovieHistory() {
    // Obtener elementos de ícono de tacho de basura y caja envolvente de información de película en History

    var movieInfoWrapperHistory = ('#movie-info-wrapper-history');
    // evento de clic para eliminar la caja envolvente de unformación de película en Watchlist
    $(trashBinHistory).on('click', function() {
      console.log('sueño');
      var id = $(this).parent().closets('div').attr('id');
      console.log(id);
    });
  }

  /* FUNCIÓN PARA IMPRIMIR CAJAS ENVOLVENTES CON INFORMACIÓN DE PELÍCULA */
  // function dfg() {

  // }
}

$(document).ready(begin);
