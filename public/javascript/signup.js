async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const profile = document.querySelector('#profile-signup').value.trim(); 
  
    if (email && password && profile) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          password, 
          profile
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        window.alert("Congratulations, account created!");
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);