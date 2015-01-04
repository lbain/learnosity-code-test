hello.init({
  facebook : '618716354940237'
}, {scope: 'friends,photos' });

hello.on('auth.login', function(auth){
  app.displayLoading();
  app.auth = auth;
  // call user information, for the given network
  hello( auth.network ).api( '/me' ).then( function(r){
    $('.js-loading').hide();
    $('.js-logged-in').show();
    $('.js-name').text(r.name);
    $('.js-personal-details').append("<img class='profile-pic' src='"+r.thumbnail+"'/>")
  });

  hello( auth.network ).api( '/me/albums' ).then( function(r){
    app.displayAlbums(r.data);
  },function(e){
    console.log("ERROR: ");
    console.log(e);
  });
});

$(document).on('getAlbum', function (event, id) {
  hello( app.auth.network ).api( '/me/album', 'get', {'id': id} ).then( function(r){
    app.hideAlbums();
    app.displayPictures(r.data);
  },function(e){
    console.log("ERROR: ");
    console.log(e);
  });
})