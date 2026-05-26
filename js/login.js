// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.querySelector('.login-box input[type="text"]').value;
    const password = document.querySelector('.login-box input[type="password"]').value;
    
    console.log('Username:', username);
    console.log('Password:', password);
    
    window.location.href = 'index.html';  // ✅ Should have underline
});

// Handle social login buttons
function handleSocialLogin(event) {
    event.preventDefault();
    window.location.href = 'index.html';  // ✅ Should have underline
}