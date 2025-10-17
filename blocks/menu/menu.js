export function initMenu() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  if (!burger || !nav) return;

  function toggle() {
    const opened = nav.classList.toggle('menu_opened');
    burger.setAttribute('aria-expanded', String(opened));
    nav.setAttribute('aria-hidden', String(!opened));
  }

  burger.addEventListener('click', toggle);

  // Закрываем меню при клике по ссылке (на мобилке)
  nav.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('menu_opened')) toggle();
    });
  });
}