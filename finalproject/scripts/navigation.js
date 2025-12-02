
const hamBtn = document.getElementById('ham-btn');
const navBar = document.getElementById('nav-bar');

hamBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});
