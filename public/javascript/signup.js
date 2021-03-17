async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#xxx').value.trim();
    const email = document.querySelector('#yyy').value.trim();
    const password = document.querySelector('#zzz').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.aaa').addEventListener('submit', signupFormHandler);