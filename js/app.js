// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC3hqRINXbqnNd0V5orGP-say7b414Gems',
  authDomain: 'movie-geek-8b595.firebaseapp.com',
  databaseURL: 'https://movie-geek-8b595.firebaseio.com',
  projectId: 'movie-geek-8b595',
  storageBucket: '',
  messagingSenderId: '535112578744'
};
firebase.initializeApp(config);

$(document).ready(function() {
  // Variables
  var $loginGoogle = $('#google-login');
  var $loginFb = $('#fb-login');
  var $loginEmail = $('#login-email');
  var $loginPassword = $('#login-password');

  // Login con email
  $loginEmail.click(function(event) {
    event.preventDefault();

    var $email = $loginEmail.val();
    var $password = $loginPassword.val();

    firebase.auth().signInWithEmailAndPassword($email, $password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        $('#login-help').removeClass('d-none');
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        $(location).attr('href', 'home.html');
      }
    });
  });

  // Login con Google
  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  $loginGoogle.click(function() {
    firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      firebase.database().ref('users/' + user.uid).set({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        profilePhoto: user.photoURL
      }).then(
        user => {
          $(location).attr('href', 'home.html');
        });
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });

  // Obteniendo datos del usuario actual
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var name = user.displayName;
      var email = user.email;
      var photoUrl = user.photoURL;
      var emailVerified = user.emailVerified;
      var uid = user.uid;
      // console.log(user);
      $username.text(name);
      $userEmail.text(email);
      $profilePhoto.attr('src', photoUrl);
    } else {
      // No user is signed in.
    }
  });

  // Cerrar sesión
  // $signOut.click(function() {
  //   firebase.auth().signOut().then(function() {
  //     // Sign-out successful.
  //     console.log('Cerrando sesión...');
  //     $(location).attr('href', 'login.html');
  //   }).catch(function(error) {
  //     // An error happened.
  //   });
  // });
});