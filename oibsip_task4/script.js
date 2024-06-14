const users = {
    "user1": "password1",
    "user2": "password2"
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (users.hasOwnProperty(username) && users[username] === password) {
        document.getElementById('message').innerHTML = "<div class='success'>Login successful!</div>";
        setTimeout(() => {
            window.location.href = "secured.html";
        }, 1000);
    } else {
        document.getElementById('message').innerHTML = "<div class='error'>Invalid username or password!</div>";
    }
});
