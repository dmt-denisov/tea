const regForm = document.querySelector('.regForm');
const errReg = document.querySelector('.err-reg');

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    action, method, login, email, password, confirm,
  } = event.target;
  const response = await fetch(action, {
    method,
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      login: login.value,
      email: email.value,
      password: password.value,
      role: 'user',
      confirm: confirm.value,
    }),
  });
  const data = await response.json();
  if (data.status === 'error') {
    errReg.innerHTML = data.message;
  } else {
    window.location.assign('/');
  }
});
