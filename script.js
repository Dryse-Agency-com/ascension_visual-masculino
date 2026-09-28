'use strict';

/* Todos os links, âncoras, preços e FAQs funcionam sem JavaScript. */
(() => {
  // Só alterar para true após confirmar com o responsável que R$ 49,90
  // é um preço regular verdadeiro. Não calcular desconto ou criar urgência.
  const REGULAR_PRICE_CONFIRMED = false;
  document.querySelectorAll('[data-regular-price]').forEach((price) => {
    price.hidden = !REGULAR_PRICE_CONFIRMED;
  });

  const dialog = document.querySelector('.lightbox');
  const dialogImage = document.querySelector('.lightbox-image');
  const dialogTitle = document.querySelector('#lightbox-title');
  const closeButton = document.querySelector('.lightbox-close');
  let lastSample = null;

  // Sem suporte a dialog, o link abre diretamente a imagem original.
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-sample]').forEach((link) => {
      link.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        lastSample = link;
        dialogImage.src = link.href;
        dialogImage.alt = link.querySelector('img').alt;
        dialogTitle.textContent = link.dataset.title;
        dialog.showModal();
        document.body.classList.add('modal-open');
        const scroller = dialog.querySelector('.lightbox-scroll');
        scroller.scrollTop = 0;
        scroller.scrollLeft = 0;
        closeButton.focus();
      });
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      if (lastSample) lastSample.focus({ preventScroll: true });
    });
  }

  const bar = document.querySelector('.mobile-buy');
  const hero = document.querySelector('.hero');
  if (!bar || !hero) return;
  const mobile = window.matchMedia('(max-width: 700px)');
  let scheduled = false;
  const updateBar = () => {
    scheduled = false;
    const visible = mobile.matches && hero.getBoundingClientRect().bottom <= 0;
    bar.hidden = !visible;
    // Mantém espaço no rodapé para que a barra nunca cubra o fim da página.
    document.documentElement.style.setProperty('--sticky-space', visible ? `${bar.offsetHeight + 16}px` : '0px');
  };
  const scheduleUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateBar);
    }
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  window.addEventListener('pageshow', scheduleUpdate);
  updateBar();
})();
