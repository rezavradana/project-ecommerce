import UrlParser from '../../route/url-parser';
import { getProductFromCategory, getProducts } from '../../data/main';
import { filterProductsByCategory } from '../../utils/category-filter';

const Category = {
    async render() {
        const { verb } = UrlParser.parseActiveUrlWithoutCombiner();
        const titleCategory = verb.trim().charAt(0).toUpperCase() + verb.trim().slice(1);
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="category">
            <div class="title-category">
                <div class="header">
                    <i></i>
                    <span>${titleCategory}</span>
                </div>
                <div class="title">
                    <h1>Browse By ${titleCategory}</h1>
                </div>
            </div>

            <div class="list-products"></div>
        </div>
        `

    },

    async afterRender() {
        const { verb } = UrlParser.parseActiveUrlWithoutCombiner();
        const titleCategory = verb.trim().charAt(0).toUpperCase() + verb.trim().slice(1);


        const elementProductTemplate = (product) => {
            const listProductsElement = document.querySelector('.list-products');
            listProductsElement.innerHTML += `
            <div class="product">
                <a href="/#/product/${product.id}"> 
                    <div class="image-product">
                        <img src="./images/${product.image_url}" alt="">
                    </div>
                    <div class="description-product">
                        <span>${product.name}</span>
                        <span>${product.price}</span>
                        <div class="rating">
                            <i class="fa fa-star"> 5.0 | </i>
                            <span>${product.stock}</span>
                        </div>
                    </div>
                </a>
            </div>
            `
        }

        if (titleCategory === 'Baju') {
            const resultProductByCategory = await getProductFromCategory('categories-h1fb8xYOwvlZWc_g');
            const { products } = resultProductByCategory.data;

            for (const product of products) {
                elementProductTemplate(product);
            }
        } 

        if (titleCategory === 'Kerudung') {
            const resultProductByCategory = await getProductFromCategory('categories-kzsxI8bbn-l15gsM');
            const { products } = resultProductByCategory.data;

            for (const product of products) {
                elementProductTemplate(product);
            }
        }
    }
}

export default Category;