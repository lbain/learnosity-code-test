var app = app || {};

app.displayLoading = function () {
  $('.js-not-logged-in').hide();
  $('.js-loading').show();
};

app.allAlbums = function (fbArray) {
  albums = []
  for (var i = 0; i < fbArray.length; i ++ ){
    if (fbArray[i].thumbnail){
      albums.push(new Album(fbArray[i]));
    }
  }
  return albums;
};

app.allPictures = function (fbArray) {
  pictures = []
  for (var i = 0; i < fbArray.length; i ++ ){
    pictures.push(new Picture(fbArray[i]));
  }
  return pictures;
};

app.displayAlbums = function(fbArray) {
  var albums = app.allAlbums(fbArray);
  var $containter = $('.js-albums');
  for (var i = 0; i < albums.length; i++) {
    $containter.append(albums[i].buildHtml());
  }
};

app.getAlbum = function (albumId) {
  $(document).trigger("getAlbum", [albumId]);
};

app.handleAlbumClick = function() {
  $(document).on('click', '.js-album', function (event) {
    app.getAlbum($(event.target).closest('.js-album').data('id'))
  })
};

app.handleBackClick = function() {
  $(document).on('click', '.back-album', function(e) {
    app.hidePictures();
    app.showAlbums();
  })
};

app.handleClicks = function() {
  app.handleAlbumClick();
  app.handleBackClick();
};

app.hideAlbums = function() {
  $('.js-albums').hide();
};

app.showAlbums = function() {
  $('.js-albums').show();
}

app.displayPictures = function(fbArray) {
  var pictures = app.allPictures(fbArray);
  var $containter = $('.js-pictures');
  for (var i = 0; i < pictures.length; i++) {
    $containter.append(pictures[i].buildHtml());
  }
  $('.album-view').show();
};

app.hidePictures = function() {
  $('.js-pictures').empty();
  $('.album-view').hide();
}

app.handleClicks();