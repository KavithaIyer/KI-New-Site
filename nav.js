(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  var body = document.body;
  var firstLink = menu.querySelector('a');

  function openMenu() {
    body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', function () {
    if (body.classList.contains('nav-open')) {
      closeMenu();
    } else {
      openMenu();
      if (firstLink) {
        window.setTimeout(function () { firstLink.focus(); }, 320);
      }
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  menu.addEventListener('click', function (e) {
    var target = e.target;
    while (target && target !== menu) {
      if (target.tagName === 'A') { closeMenu(); return; }
      target = target.parentNode;
    }
  });

  var mq = window.matchMedia('(min-width: 821px)');
  function handleResize(e) {
    if (e.matches && body.classList.contains('nav-open')) closeMenu();
  }
  if (mq.addEventListener) mq.addEventListener('change', handleResize);
  else if (mq.addListener) mq.addListener(handleResize);
})();
