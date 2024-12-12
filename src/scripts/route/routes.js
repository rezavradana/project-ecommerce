import Home from '../views/pages/home';
import Register from '../views/pages/register';
import Login from '../views/pages/login';
import Category from '../views/pages/category';
import Wishlist from '../views/pages/wishlist';
import Cart from '../views/pages/cart';
import Product from '../views/pages/product';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/register': Register,
  '/login': Login,
  '/category/:type': Category,
  '/product/:verb': Product,
  '/wishlist': Wishlist,
  '/cart': Cart,
};

export default routes;
