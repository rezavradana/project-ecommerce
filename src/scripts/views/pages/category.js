import UrlParser from '../../route/url-parser';
import { getProducts } from '../../data/main';
import { filterProductsByCategory } from '../../utils/category-filter';

const Category = {
    async render() {
        const { verb } = UrlParser.parseActiveUrlWithoutCombiner();
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="category">
        <div class="title-category">
            <div class="header">
                <i></i>
                <span>${verb}</span>
            </div>
            <div class="title">
                <h1>Browse By ${verb}</h1>
            </div>
        </div>

        <div class="list-products">
            <div class="product">
                <a href="/#/product/1"> 
                    <div class="image-product">
                        <img src="" alt="">
                    </div>
                    <div class="description-product">
                        <span>Judul Product</span>
                        <span>Rp.15000</span>
                        <div class="rating">
                            <i class="fa fa-star"> 5.0 | </i>
                            <span>10 terjual</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="product">
                <a href="/#/product/1"> 
                    <div class="image-product">
                        <img src="" alt="">
                    </div>
                    <div class="description-product">
                        <span>Judul Product</span>
                        <span>Rp.15000</span>
                        <div class="rating">
                            <i class="fa fa-star"> 5.0 | </i>
                            <span>10 terjual</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="product">
                <a href="/#/product/1"> 
                    <div class="image-product">
                        <img src="" alt="">
                    </div>
                    <div class="description-product">
                        <span>Judul Product</span>
                        <span>Rp.15000</span>
                        <div class="rating">
                            <i class="fa fa-star"> 5.0 | </i>
                            <span>10 terjual</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="product">
                <a href="/#/product/1"> 
                    <div class="image-product">
                        <img src="" alt="">
                    </div>
                    <div class="description-product">
                        <span>Judul Product</span>
                        <span>Rp.15000</span>
                        <div class="rating">
                            <i class="fa fa-star"> 5.0 | </i>
                            <span>10 terjual</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </div>
        `

    },

    async afterRender() {
        const { verb } = UrlParser.parseActiveUrlWithoutCombiner();
        const responseJson = await getProducts();
            if (responseJson.status === 'success' && responseJson.data && responseJson.data.products) {
                const products = responseJson.data.products;

                // Memfilter produk berdasarkan kategori
                const filteredProducts = filterProductsByCategory(products, verb);

                const listProductsContainer = document.querySelector('.list-products');
                    listProductsContainer.innerHTML = '';
                    filteredProducts.forEach(product => {
                        const productElement = document.createElement('div');
                            productElement.classList.add('product');

                            productElement.innerHTML = `
                                <a href="/#/product/${product.id}"> 
                                    <div class="image-product">
                                        <img src="./images/${product.image_url}" alt="${product.name}">
                                    </div>
                                    <div class="description-product">
                                        <span>${product.name}</span>
                                        <span>Rp.${product.price}</span>
                                        <div class="rating">
                                            <span>Tersisa: ${product.stock} Stok</span>
                                        </div>
                                    </div>
                                </a>
                            `;
                        listProductsContainer.appendChild(productElement);
                    });
        } else {
            console.error('Terjadi kesalahan, gagal dalam memuat produk');
        }
    }
}

export default Category;