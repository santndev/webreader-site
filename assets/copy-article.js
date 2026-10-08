document.querySelectorAll('[data-copy-article]').forEach((button) => {
  const status = document.getElementById(button.getAttribute('aria-describedby'));
  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      await navigator.clipboard.writeText(button.dataset.copyArticle);
      status.textContent = button.dataset.success;
    } catch {
      status.textContent = button.dataset.failure;
    } finally {
      button.disabled = false;
    }
  });
});
