const buttonAddTea = document.querySelector('.add');

buttonAddTea.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    method, action, name, title, picture, coordinateX, coordinateY,
  } = event.target;
  const response = await fetch(action, {
    method,
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      title: title.value,
      picture: picture.value,
      coordinateX: coordinateX.value,
      coordinateY: coordinateY.value,
    }),
  });
  const teaHtml = await response.text();
  console.log(teaHtml);
  const teasContainer = document.querySelector('#teas');
  const prevTeassHtml = teasContainer.innerHTML;
  teasContainer.innerHTML = prevTeassHtml + teaHtml;
  buttonAddTea.reset();
});
