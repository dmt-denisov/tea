// const form = document.querySelector('#listChai');

// form.addEventListener('click', async (event) => {
//   event.preventDefault();
//   const isPushButton = event.target.closest('.cardLink');

//   const chaiId = isPushButton.dataset.id;

//   const response = await fetch(`/tea/${chaiId}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'Application/json',
//     },
//     body: JSON.stringify({
//       id: chaiId,
//     }),
//   });
//   const data = await response.text();
//   console.log(data);
// });
