// Smooth scroll to sections when clicking on navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offsetTop = target.getBoundingClientRect().top;
        window.scrollBy({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });
  
  // Form validation for user registration
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all fields');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else {
      // Send registration data to the backend
      // Code to handle the registration process with backend API
      alert('User registered successfully!');
    }
  });
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  