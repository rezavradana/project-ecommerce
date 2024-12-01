import Home from '../views/pages/home';
import Register from '../views/pages/register';
import Login from '../views/pages/login';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/register': Register,
  '/login': Login,
  '/category': Category,
  '/wishlist': Wishlist,
  '/cart': Cart,
};

export default routes;
