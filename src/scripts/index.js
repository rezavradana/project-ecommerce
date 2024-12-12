import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  window.addEventListener('load', async () => {
    await app.renderPage();
  });
});
