document.addEventListener("DOMContentLoaded", function init() {
  'use strict';

  function validEmail(input) {
    var emailRegExp = /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i;
    if (input) {
      return emailRegExp.test(input);
    } else {
      return false;
    }
  }

  function success(element) {
    element.setAttribute('class', 'valid');
  }
  function failure(element) {
    element.setAttribute('class', 'error');
  }

  var form = document.getElementsByTagName('form')[0]; 
  form.addEventListener('keyup', function() {
    
    var emailInput      = document.getElementById('email');
    var emailInputValue = emailInput.value;

    if (validEmail(emailInputValue)) {
      success(emailInput);
    } else {
      failure(emailInput);
    }
    
  },false);

},false);
