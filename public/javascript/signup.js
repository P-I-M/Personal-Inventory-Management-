//Signup to app 
async function signupFormHandler(event) {
  var profile =""; 
  const imageEl = document.getElementById("profile-signup");
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if(document.body.contains(imageEl)) //If a user has uploaded an image get the source of that image
  {
  profile = document.getElementById("profile-signup").src; 
  }
  else //If the user has not uploaded an image, use this default source 
  {
    profile = "https://res.cloudinary.com/personal-inventory-management/image/upload/v1616534747/default_paul_sc7mmk.jpg";
  }

  if (email && password) { //User must enter an email and password to sign up 
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
      document.location.replace('/dashboard');
    } else {
      response.json().then(data => {
      window.alert(data.message);
     });
    }
  }
}

document.querySelector('#sign-up').addEventListener('click', signupFormHandler);