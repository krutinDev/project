export function initFormValidation() {
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', (e) => {
      let valid = true;
      form.classList.remove('form_invalid');

      form.querySelectorAll('.form__input[required]').forEach(input => {
        if (!input.value.trim() || (input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value))) {
          valid = false;
          const field = input.closest('.form__field');
          if (field) field.querySelector('.form__error')?.classList.add('visible');
        }
      });

      if (!valid) {
        e.preventDefault();
        form.classList.add('form_invalid');
      }
    });

    // Скрываем ошибку по вводу
    form.querySelectorAll('.form__input').forEach(input => {
      input.addEventListener('input', () => {
        const field = input.closest('.form__field');
        field?.querySelector('.form__error')?.classList.remove('visible');
      });
    });
  });
}