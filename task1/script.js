// Change navbar background color when scrolling
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  // Optional: Add smooth scrolling when clicking on the menu items
  const links = document.querySelectorAll('.navbar a');
  for (const link of links) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    });
  }
  