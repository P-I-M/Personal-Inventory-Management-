async function signupFormHandler(event) {
  //event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const profile = document.getElementById("profile-signup").src; 

  if (email && password) {
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
      window.alert("Welcome to m n mlize!");
      console.log('success');
      document.location.replace('/dashboard');
    } else {
      //alert(response.statusText);
      response.json().then(data => {
      window.alert(data.message);
     });
    }
  }
}

//document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#sign-up').addEventListener('click', signupFormHandler);