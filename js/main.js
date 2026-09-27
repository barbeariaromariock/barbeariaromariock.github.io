(() => {
  document.documentElement.classList.add('js');

  // Cabeçalho com fundo ao rolar + botão flutuante do WhatsApp
  const header = document.querySelector('[data-header]');
  const waFloat = document.querySelector('.wa-float');
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 24);
    waFloat?.classList.toggle('is-visible', y > 480);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Dia da semana no fuso de Maracanaú (atendimento de terça a sábado)
  const DAYS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'America/Fortaleza' }).format(new Date());
  const today = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[weekday] ?? new Date().getDay();
  const isOpen = today >= 2 && today <= 6;
  const dayName = DAYS[today];

  const setText = (selector, text) => document.querySelectorAll(selector).forEach((el) => { el.textContent = text; });
  setText('[data-today-top]', `Hoje é ${dayName}`);
  setText('[data-today-mid]', isOpen ? 'dia de visual novo' : 'estamos fechados');
  setText('[data-today-bottom]', isOpen ? 'Estamos atendendo' : 'Voltamos na terça');
  setText('[data-today-status]', isOpen
    ? `Hoje é ${dayName}: estamos atendendo. Chame no WhatsApp e garanta seu horário.`
    : `Hoje é ${dayName}: estamos fechados. Voltamos na terça, já pode agendar!`);

  document.querySelectorAll('[data-day]').forEach((el) => {
    if (Number(el.dataset.day) === today) {
      el.classList.add('is-today');
      el.setAttribute('aria-current', 'date');
    }
  });

  setText('[data-year]', String(new Date().getFullYear()));

  // Elementos surgem ao entrar na tela
  const reveal = document.querySelectorAll('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Também revela o que ficou acima da tela (ex.: quem chega por um link #localizacao)
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveal.forEach((el) => io.observe(el));
  } else {
    reveal.forEach((el) => el.classList.add('is-visible'));
  }
})();
