const buttonAddCom = document.querySelector('.addCom');

buttonAddCom.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { action, method, text } = event.target;
  // console.log(action, method, text.value);
  const response = await fetch(action, {
    method,
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      text: text.value,
      // userId: res.lo,
    }),
  });
  const html = await response.text();
  console.log(html);
  const comContainer = document.querySelector('.commentsFromDb');
  const prevComsHtml = comContainer.innerHTML;
  comContainer.innerHTML = prevComsHtml + html;
  buttonAddCom.reset();
});
