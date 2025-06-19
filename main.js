console.log('Hello World!');
// Username dan password yang diizinkan (hardcoded)
const validUsers = [
  { username: 'Zhics', password: '2406' },
  { username: 'Rizhi', password: '1604' },
  {username: 'SHINIGAdmin', password: '1401' }
];

// Ambil elemen form
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Tangani submit form
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  // Cek apakah user valid
  const userFound = validUsers.find(user => 
    user.username === usernameInput && user.password === passwordInput
  );

  if (userFound) {
    message.style.color = 'green';
    message.textContent = 'Login berhasil!';
    setTimeout(() => {
      window.location.href = "Home/Home.html"
    }, 1000)
  } else {
    message.style.color = 'red';
    message.textContent = 'Username atau password salah!';
  }
});