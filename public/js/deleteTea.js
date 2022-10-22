const teasContainer = document.querySelector('.js-teas-container');
if (teasContainer) {
  teasContainer.addEventListener('click', async (event) => {
    const isDeleteBtn = event.target.classList.contains('js-delete');

    if (!isDeleteBtn) {
      return;
    }

    const teaElement = event.target.closest('.js-tea');
    const teaId = teaElement.dataset.id;
    const url = `/tea/${teaId}`;
    try {
      const response = await fetch(url, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error(`Не получилось удалить заметку ${teaId}`);
      }
      teaElement.remove();
    } catch (error) {
      console.log(error.message);
    }
  });
}
