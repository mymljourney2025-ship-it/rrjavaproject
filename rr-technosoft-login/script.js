// Client-side demo auth for RR Technosoft sample login
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('message');

  function showMessage(text, isError){
    msg.textContent = text;
    msg.style.color = isError ? getComputedStyle(document.documentElement).getPropertyValue('--danger') || '#d9534f' : 'green';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.textContent = '';

    const username = form.username.value.trim();
    const password = form.password.value;

    // Basic client-side validation
    if (!username){ showMessage('Please enter username or email', true); form.username.focus(); return }
    if (!password || password.length < 6){ showMessage('Password must be at least 6 characters', true); form.password.focus(); return }

    // Demo credentials (do not use in production)
    const demoUser = 'student';
    const demoPass = 'rrtech123';

    if ((username === demoUser || username.toLowerCase() === 'student@rrtech.com') && password === demoPass){
      // store a small session token demo and redirect to dashboard
      sessionStorage.setItem('rr_user', username);
      showMessage('Signing in…', false);
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 700);
    } else {
      showMessage('Invalid username or password', true);
    }
  });
});
