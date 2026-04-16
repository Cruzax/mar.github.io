// Bannière de consentement cookies — Association MAR
/*
(function () {
  const COOKIE_KEY = 'mar_cookie_consent';

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function getCookie(name) {
    return document.cookie.split('; ').reduce(function (r, v) {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, null);
  }

  // Si déjà accepté ou refusé, ne rien faire
  if (getCookie(COOKIE_KEY)) return;

  // Créer la bannière
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div style="display:flex;align-items:center;flex-wrap:wrap;gap:1rem;max-width:1100px;margin:0 auto;">
      <p style="margin:0;flex:1;min-width:200px;font-size:0.875rem;">
        <strong>🍪 Cookies</strong> — Ce site utilise uniquement un cookie fonctionnel pour mémoriser vos préférences. Aucun cookie publicitaire ni de traçage.
        <a href="mentions-legales.html#cookies" style="color:var(--jaune-doux);text-decoration:underline;margin-left:4px;">En savoir plus</a>
      </p>
      <div style="display:flex;gap:.75rem;flex-shrink:0;">
        <button id="cookie-accept" style="background:var(--rouge);color:#fff;border:none;padding:.5rem 1.25rem;cursor:pointer;font-size:.875rem;font-family:inherit;">
          Accepter
        </button>
        <button id="cookie-refuse" style="background:transparent;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.3);padding:.5rem 1.25rem;cursor:pointer;font-size:.875rem;font-family:inherit;">
          Refuser
        </button>
      </div>
    </div>
  `;

  Object.assign(banner.style, {
    position:   'fixed',
    bottom:     '0',
    left:       '0',
    right:      '0',
    background: 'var(--dark)',
    color:      '#fff',
    padding:    '1rem 1.5rem',
    zIndex:     '9999',
    boxShadow:  '0 -4px 20px rgba(0,0,0,.25)',
    animation:  'slideUpBanner .4s ease'
  });

  // Style animation
  const style = document.createElement('style');
  style.textContent = '@keyframes slideUpBanner{from{transform:translateY(100%)}to{transform:translateY(0)}}';
  document.head.appendChild(style);

  document.body.appendChild(banner);

  document.getElementById('cookie-accept').addEventListener('click', function () {
    setCookie(COOKIE_KEY, 'accepted', 365);
    banner.remove();
  });

  document.getElementById('cookie-refuse').addEventListener('click', function () {
    setCookie(COOKIE_KEY, 'refused', 365);
    banner.remove();
  });
})();
