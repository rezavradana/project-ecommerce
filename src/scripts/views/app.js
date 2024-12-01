import UrlParser from '../route/url-parser';
import routes from '../route/routes';

class App {
  constructor() {}

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await page.render();
    await page.afterRender();
  }
}

export default App;
