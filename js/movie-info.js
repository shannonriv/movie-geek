function begin() {
  addToHistory();
  likeRating();
  var addBtn = $('#btn-add');
  addBtn.click(watchlist);
}

/* FUNCIÓN QUE AÑADE PELÍCULAS A RAMA FIREBASE WATCHLIST */
function watchlist() {
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

/* FUNCIÓN QUE AÑADE PELÍCULAS A PESTAÑA HISTORY */
function addToHistory() {
  // Variable del ícono para agregar a lista de películas ya vistas
  var historyBtn = $('#btn-history');
  console.log(historyBtn);
  $(historyBtn).on('click', function() {
    // Obteniendo contenido textual de los id en localStorage
    localStorage.moviePosterHistory = $('#movie-poster').attr('src');
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

/* FUNCIÓN PARA DAR LIKE Y QUITAR LIKE CON COLOR */
function likeRating() {
  // Variable del ícono para compartir películas
  var likeBtn = $('#thumb-up');
  console.log(likeBtn);
  $(likeBtn).on('click', function() {
    likeBtn.addClass('hand-color');
  });
}

function likeToggle(x) {
  x.classList.toggle('fa-thumbs-down');
}

// function dislikeRating() {
//   // Variable del ícono para compartir películas
//   var unlikeBtn = $('#thumb-up');
//   console.log(unlikeBtn);
//   $(unlikeBtn).on('click', function() {
//     if ($(unlikeBtn).hasClass('hand-color')) {
//       $(unlikeBtn).removeClass('hand-color').addClass('hand');
//     }
//   });
// }


$(document).ready(begin);
