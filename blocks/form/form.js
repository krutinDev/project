export function initFormValidation() {
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', (e) => {
      let valid = true;
      form.classList.remove('form_invalid');

      form.querySelectorAll('.form__input[required]').forEach(input => {
        const isEmpty = !input.value.trim();
        const isBadEmail = input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value);
        const field = input.closest('.form__field');
        const error = field?.querySelector('.form__error');

        if (isEmpty || isBadEmail) {
          valid = false;
          error?.classList.add('visible');
        } else {
          error?.classList.remove('visible');
        }
      });

      if (!valid) {
        e.preventDefault();
        form.classList.add('form_invalid');
      }
    });

    // Скрываем ошибку при вводе
    form.querySelectorAll('.form__input').forEach(input => {
      input.addEventListener('input', () => {
        const field = input.closest('.form__field');
        field?.querySelector('.form__error')?.classList.remove('visible');
      });
    });
  });
}