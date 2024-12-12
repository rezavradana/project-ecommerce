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

    return url;
}

export default addRoute;
