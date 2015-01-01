hello.init({
  facebook : '618716354940237'
},{redirect_uri:''});

// taken from http://adodson.com/hello.js/#quick-start
hello.on('auth.login', function(auth){

  // call user information, for the given network
  hello( auth.network ).api( '/me' ).then( function(r){
    debugger
    // Inject it into the container
    var label = document.getElementById( "profile_"+ auth.network );
    if(!label){
      label = document.createElement('div');
      label.id = "profile_"+auth.network;
      document.getElementById('profile').appendChild(label);
    }
    label.innerHTML = '<img src="'+ r.thumbnail +'" /> Hey '+r.name;
  });
});
