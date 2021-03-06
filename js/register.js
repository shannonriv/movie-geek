$(document).ready(function() {
  // Variables
  var $regBtn = $('#register-btn');
  var $regName = $('#reg-name');
  var $regLastname = $('#reg-lastname');
  var $checkBox = $('#terms-check');
  var $regEmail = $('#reg-email');
  var $regPassword = $('#reg-password');

  // Asociando eventos
  $regName.on('input', validName).on('input', nameEvent).on('input', validRegistration);
  $regLastname.on('input', validLastname).on('input', lastnameEvent).on('input', validRegistration);
  $regEmail.on('input', validEmail).on('input', emailEvent).on('input', validRegistration);
  $regPassword.on('input', validPassword).on('input', passwordEvent).on('input', validRegistration);
  $checkBox.click(validRegistration);
  $regBtn.click(register);

  // Funciones de validación del formulario
  function validName() {
    return $regName.val().length >= 3;
  }

  function nameEvent() {
    if (validName()) {
      $regName.popover('hide');
    } else {
      $regName.popover('show');      
    }
  }

  function validLastname() {
    return $regLastname.val().length >= 3;
  }

  function lastnameEvent() {
    if (validLastname()) {
      $regLastname.popover('hide');
    } else {
      $regLastname.popover('show');      
    }
  }

  function validEmail() {
    var $regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    return $regexEmail.test($regEmail.val());
  }

  function emailEvent() {
    if (validEmail()) {
      $regEmail.popover('hide');
    } else {
      $regEmail.popover('show');      
    }
  }

  function validPassword() {
    var $regexPassword = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\0-9]{6,}$/;
    return $regexPassword.test($regPassword.val());
  }

  function passwordEvent() {
    if (validPassword()) {
      $regPassword.popover('hide');
    } else {
      $regPassword.popover('show');      
    }
  }

  function validCheckbox() {
    return $checkBox.is(':checked');
  }

  function validRegistration() {
    if (validName() && validLastname() && validEmail() && validPassword() && validCheckbox()) {
      $regBtn.prop('disabled', false);
    } else {
      $regBtn.prop('disabled', true);
    }
  }

  // Rgistro de usuario nuevo
  function register() {
    var $email = $regEmail.val();
    var $password = $regPassword.val();

    // Auth Firebase para crear usuario con email
    firebase.auth().createUserWithEmailAndPassword($email, $password)
      .then(function(user) {
        var username = $regName.val() + ' ' + $regLastname.val();    
        return user.updateProfile({
          displayName: username,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/movie-geek-8b595.appspot.com/o/projectImages%2Favatar.svg?alt=media&token=6507d06b-3a28-476e-b077-64364643eb93'
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firebase.database().ref('users/' + user.uid).set({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          profilePhoto: user.photoURL
        }).then(user => {
          // Redireccionar a home
          $(location).attr('href', 'search.html');
        }); 
        console.log('User is registered.');
      } else {
        console.log('Registration failed.');   
      }
    });
  }

  // Popovers
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});