$(document).ready(function(){
  var inputFld = $('#titleFld');
  var searchBtn = $('#searchBtn');

  searchBtn.click(handleSearchBtn);
  function handleSearchBtn() {
    var title = inputFld.val();
    console.log(title)
    var url = 'http://www.omdbapi.com/?&apikey=5bb8748d&s=' + title + '&type=movie';
    $.ajax({
      url: url,
      success: renderMovies
    });
  }

  function renderMovies(response) {
    console.log(response);
    var movieList = $('#movieList');
    movieList.empty();
    for(var m in response.Search) {
      var movie = response.Search[m];
      var li = $('<li class="list-group-item">');
      var img = $('<img src="'+movie.Poster+'" with="50px">');
      li.append(img);
      li.append(movie.Title);
      movieList.append(li);
    }

  }
})
