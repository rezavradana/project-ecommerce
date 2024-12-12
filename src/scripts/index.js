import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    wishlist: document.querySelector('.wishlist'),
    cart: document.querySelector('.cart'),
    loginlogout: document.querySelector('.login-logout')
  });

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  window.addEventListener('load', async () => {
    await app.renderPage();
  });
});
