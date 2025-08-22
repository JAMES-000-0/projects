document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault(); 
    const uname = document.getElementById('username').value.trim(); 
    const pass = document.getElementById('password').value; 
    const messages = document.getElementById('result');

    if (uname ==='java' ) {
        messages.textContent = 'Login Successful';
        messages.className = 'success';
    } else {
        messages.textContent = 'Login Failed';
        messages.className = 'error';
    }
});
