async function signupFormHandler(event) {
  event.preventDefault();
  var profile ="";
  const imageEl = document.getElementById("profile-signup");
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if(document.body.contains(imageEl))
  {
  profile = document.getElementById("profile-signup").src; 
  }
  else
  {
    profile = "https://res.cloudinary.com/personal-inventory-management/image/upload/v1616534747/default_paul_sc7mmk.jpg";
  }

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
      alert(response.statusText);
    }
  }
}

document.querySelector('#sign-up').addEventListener('click', signupFormHandler);