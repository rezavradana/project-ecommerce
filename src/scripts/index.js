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

    // Navbar Drawer 
    const drawer = document.querySelector('#drawer');
    const menuNavBar = document.querySelector('.menu-navbar');
      if (drawer && menuNavBar) {
        drawer.addEventListener('click', () => {
          menuNavBar.classList.toggle('open');
          const isOpen = menuNavBar.classList.contains('open');
            drawer.setAttribute('aria-expanded', isOpen);
        });
  
        window.addEventListener('resize', () => {
          if (window.innerWidth > 768) {
            menuNavBar.classList.remove('open');
            drawer.setAttribute('aria-expanded', 'false');
          }
        });
      }
});
