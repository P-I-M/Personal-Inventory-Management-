async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      window.alert("Welcome to m n mlize!");
      document.location.replace('/dashboard');
    } else {
       //alert(response.statusText);
      response.json().then(data => {
      window.alert(data.message);
     });
    }
  }
}

// Event listener for the login-form button

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);