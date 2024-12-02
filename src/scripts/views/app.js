import UrlParser from '../route/url-parser';
import routes from '../route/routes';
import addRoute from '../utils/dynamic-routes';

class App {
  constructor() {}

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const urlFilter = addRoute(url);
    const page = routes[urlFilter];
    await page.render();
    await page.afterRender();
  }
}

export default App;
