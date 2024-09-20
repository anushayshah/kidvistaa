
// start menu toggle
let up = document.querySelector("#menu-bars");
let menu = document.querySelector("#on");
let nav = document.querySelector(".navbar");
up.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

let one = document.querySelectorAll(".one");
one.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    e.classList.add("active");
    nav.classList.toggle("active");
    menu.classList.toggle("fa-times");
  });
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
};
// end menu toggle
// FAQ\\
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});



// Get modal element
var modal = document.getElementById('loginModal');

// Get open modal triggers
var triggers = document.querySelectorAll('.login-trigger');

// Get close button
var closeButton = document.querySelector('.close-button');

// Get toggle form link
var toggleFormLink = document.getElementById('toggleForm');

// Get forms
var loginForm = document.getElementById('loginForm');
var signupForm = document.getElementById('signupForm');

// Open modal
triggers.forEach(trigger => {
    trigger.onclick = function() {
        modal.style.display = 'flex';
    };
});

// Close modal
closeButton.onclick = function() {
    modal.style.display = 'none';
};

// Toggle between forms
toggleFormLink.onclick = function(event) {
    event.preventDefault();
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleFormLink.innerHTML = "Don't have an account? <a href='#'>Signup</a>";
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleFormLink.innerHTML = "Already have an account? <a href='#'>Login</a>";
    }
};

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
