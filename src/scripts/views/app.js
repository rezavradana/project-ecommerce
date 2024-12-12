import UrlParser from '../route/url-parser';
import routes from '../route/routes';
import addRoute from '../utils/dynamic-routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ wishlist, cart, loginlogout }) {
    this._wishlist = wishlist;
    this._cart = cart;
    this._loginlogout = loginlogout;
    
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      wishlist: this._wishlist,
      cart: this._cart,
      loginlogout: this._loginlogout
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const urlFilter = addRoute(url);
    const page = routes[urlFilter];
    await page.render();
    await page.afterRender();
  }
}

export default App;
