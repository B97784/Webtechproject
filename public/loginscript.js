const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginSubmit = document.getElementById('loginSubmit');
const signUpBtn = document.getElementById('signUpBtn');

loginBtn.addEventListener('click', showLoginForm);
signupBtn.addEventListener('click', showSignupForm);
loginSubmit.addEventListener('click', redirectToOtherPage);
signUpBtn.addEventListener('click', redirectToOtherPage);

function showLoginForm() {
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
  loginForm.style.display = 'flex';
  signupForm.style.display = 'none';
}

function showSignupForm() {
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
  signupForm.style.display = 'flex';
  loginForm.style.display = 'none';
}

function redirectToOtherPage() {
  // Replace 'otherPage.html' with the desired file path
  window.location.href = 'index.html';
}