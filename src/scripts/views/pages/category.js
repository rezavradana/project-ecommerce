import UrlParser from '../../route/url-parser';
import { getProductFromCategory, getProducts } from '../../data/main';

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
                        <h3>${product.name}</h3>
                        <span>Rp.${product.price}</span>
                        <div class="product-stock">
                            <span>Sisa ${product.stock}</span>
                        </div>
                    </div>
                </a>
            </div>
            `
        }

        const categoryId = localStorage.getItem('categoryId');
        if (titleCategory === 'Baju') {
            const resultProductByCategory = await getProductFromCategory(categoryId);
            const { products } = resultProductByCategory.data;

            for (const product of products) {
                elementProductTemplate(product);
            }
        } 

        if (titleCategory === 'Kerudung') {
            const resultProductByCategory = await getProductFromCategory(categoryId);
            const { products } = resultProductByCategory.data;

            for (const product of products) {
                elementProductTemplate(product);
            }
        }
    }
}

export default Category;