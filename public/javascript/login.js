//  login submission 


async function loginFormHandler(event) {
    event.preventDefault();
  
    const email= document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(email, password)
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
        email:  email,
          password: password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
        console.log(response)
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
