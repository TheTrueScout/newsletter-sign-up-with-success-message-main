const emailRegex = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
const emailInput = document.querySelector('#email');
const form = document.querySelector('form');
const errorText = document.querySelector('.error-text');
const dismissMess = document.querySelector('.dismiss-message')
const isSubscribedOverlay = document.querySelector('.is-subscribed')


form.addEventListener('submit', (e) => {

  e.preventDefault();
  checkEmail();
  
  if (checkEmail()) {

    isSubscribedOverlay.innerHTML = 
    `<img src="assets/images/icon-success.svg" alt="icon success">

        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to ${emailInput.value}. 
          Please open it and click the button inside to confirm your subscription.</p>
      
        <button class="dismiss-message">Dismiss Message</button>`;

    isSubscribedOverlay.classList.add('overlay')
    
    form.reset();
    return false;
  }
})


function checkEmail() {
  let isValid = true
  

  if (emailInput.value === '') {
    emailInput.classList.add('error');
    errorText.classList.add('error');
    errorText.innerText = "Email can't be blank.";
    isValid = false;

  } else if (!emailInput.value.match(emailRegex)) {
    emailInput.classList.add('error');
    errorText.classList.add('error') ;
    isValid = false;
    errorText.innerText = 'Please enter a valid Email.';
  }
  
  emailInput.addEventListener('keyup', () => {

    if (!emailInput.value.match(emailRegex)) {
      emailInput.classList.add('error')
      errorText.classList.add('error')
  
      if (emailInput.value != '') {
        errorText.innerText = 'Please enter a valid Email.'
      } else {
        errorText.innerText = "Email can't be blank."
      };
      
    } else {
      emailInput.classList.remove('error')
      errorText.classList.remove('error')
    }
  })

  if (!emailInput.classList.contains('error')) {
    console.log(isValid)
    return isValid
  }
  
  return isValid
};
  

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('dismiss-message')) {
    isSubscribedOverlay.classList.remove('overlay');
  }
});
