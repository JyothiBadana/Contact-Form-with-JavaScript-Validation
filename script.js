document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';
    
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        valid = false;
    }
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        valid = false;
    }
    
    if (valid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        document.getElementById('contactForm').reset();
    }
});
