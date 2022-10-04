'use strict';

// login
const labels = document.querySelectorAll('.form-control2 label');
const btnLogin = document.querySelector('.btn-login');

const btnLogin2 = document.querySelector('.btn-login a');
const inputLoginUsername = document.querySelector('.input-username');
const inputLoginPin = document.querySelector('.input-password');
const loginText = document.querySelector('.login-text');

labels.forEach(function (label) {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, i) => {
      return `<span style="transition-delay: ${i * 50}ms">${letter}</span>`;
    })
    .join('');
});

const acc1 = { owner: 'St Luke', pin: 1111, num: +703333 };
const acc2 = { owner: 'Ruth Ebube', pin: 2222, num: +702222 };
const acc3 = { owner: 'Amara Ruth', pin: 3333, num: +70555 };
const acc4 = { owner: 'Victor Anu', pin: 4444, num: +706666 };
const acc5 = { owner: 'Caesea Chukwu', pin: 5555, num: +703476 };

const accounts = [acc1, acc2, acc3, acc4, acc5];

// Creating Username
const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    console.log(acc.userName);
  });
};

createUserName(accounts);

console.log(acc1);

// Login authentication
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => {
    return acc.userName === inputLoginUsername.value;
  });

  console.log(currentAccount);

  if (
    currentAccount &&
    inputLoginUsername.value === currentAccount.userName &&
    Number(inputLoginPin.value) === currentAccount.pin
  ) {
    window.location = 'index.html';
    console.log(window.location);
    btnLogin2.href = 'index.html';
    console.log(btnLogin2.href);

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    loginText.insertAdjacentHTML(
      'afterend',
      '<div style="color:red;">wrong user</div>'
    );
  }

  inputLoginUsername.value = inputLoginPin.value = '';
});
