document.addEventListener("DOMContentLoaded", function init() {
  'use strict';

  function nameValidation(input) {
    var nameRegExp    =  /^[a-zA-Z]+$/,
        maxNameLength = 50,
        minNameLenght = 2;

    if (input && input.length < maxNameLength && input.length > minNameLenght) 
      return nameRegExp.test(input);
    else 
     return false;    
  }

  function phoneValidation(input) {
    var phoneRegExp = /1?(?:[.\s-]?[2-9]\d{2}[.\s-]?|\s?\([2-9]\d{2}\)\s?)(?:[1-9]\d{2}[.\s-]?\d{4}\s?(?:\s?([xX]|[eE][xX]|[eE][xX]\.|[eE][xX][tT]|[eE][xX][tT]\.)\s?\d{3,4})?|[a-zA-Z]{7})/;

    if (input)
      return phoneRegExp.test(input);
    else
      return false;
  }

  function emailValidation(input) {
    var emailRegExp    = /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
        maxEmailLength = 255;

    if (input && input.length < maxEmailLength)
      return emailRegExp.test(input.toLowerCase());
    else 
      return false;
  }

  function success(element) {
    element.setAttribute('class', 'valid');
  }

  function failure(element) {
    element.setAttribute('class', 'error');
  }

  var form = document.getElementsByTagName('form')[0]; 
  form.addEventListener('keyup', function() { 

    var nameField = document.getElementById('name'),
       emailField = document.getElementById('email'),
       phoneField = document.getElementById('phone');

    (nameValidation(nameField.value))   ? success(nameField)  : failure(nameField);
    (emailValidation(emailField.value)) ? success(emailField) : failure(emailField);
    (phoneValidation(phoneField.value)) ? success(phoneField) : failure(phoneField);

    
  },false);
},false);
