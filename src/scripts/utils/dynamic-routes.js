import routes from "../route/routes";
import UrlParser from "../route/url-parser";

function addRoute(url) {
    const urlObj = UrlParser._urlSplitter(url);
    if (urlObj.resource === 'category' && urlObj.verb) {
        return '/category/:type';
    }

    if (urlObj.resource === 'product' && urlObj.id) {
        return '/product/:id';
    }

    if (urlObj.resource === 'wishlist' && urlObj.id) {
        return '/wishlist/:id';
    }

    if (urlObj.resource === 'cart' && urlObj.id) {
        return '/cart/:id';
    }

    return url;
}

export default addRoute;
