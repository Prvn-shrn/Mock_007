const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
}); 
// Topic Container
const links = document.querySelectorAll('.link-container a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    console.log(`Link clicked: ${e.target.href}`);
  });
});