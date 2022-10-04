//  Sign Up
const labels2 = document.querySelectorAll('.form-control2 label');

const btnSignup = document.querySelector('.btn-signup');
const inputSignupUsername = document.querySelector('.input-signup-username');
const inputSignupPin = document.querySelector('.input-signup-password');
const inputSignupPinConfirm = document.querySelector('.input-password-confirm');
const inputSignupPhone = document.querySelector('.input-phone');

labels2.forEach(function (label) {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, i) => {
      return `<span style="transition-delay: ${i * 50}ms">${letter}</span>`;
    })
    .join('');
});

const signUp = function () {
  let username = inputSignupUsername.value;
};

btnSignup.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(inputSignupUsername.value);
  console.log(inputSignupPin.value);
  console.log(inputSignupPhone.value);
});
