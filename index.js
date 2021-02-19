
// validate Email
const form  = document.getElementsByTagName('form')[2];
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('mail');
const text = document.getElementById('text');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

document.querySelector('.contact-btn').addEventListener('click', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    let f = fname.value;
    let l = lname.value;
    let e = email.value;
    let t = text.value;
    let msg = "mailto:dan.wilensky1995@gmail.com?cc="+e+"&subject="+f+"%20"+l+"%20Contact%20Form&body="+t;
    document.querySelector("#contact a").setAttribute("href", msg);
    // mailto:dan.wilensky1995@gmail.com
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  }
  // Set the styling appropriately
  emailError.className = 'error active';
}
