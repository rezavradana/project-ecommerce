import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getAllCategory, getProducts } from '../../data/main';

const Home = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="./images/zavieracarousel.jpg" alt=""></div>
                <div class="swiper-slide"><img src="./images/zavieracarousel2.jpg" alt=""></div>
                <div class="swiper-slide"><img src="./images/zavieracarousel3.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </div>

        <div class="category">
            <div class="title-category">
                <div class="header">
                    <i></i>
                    <span>Categories</span>
                </div>
                <div class="title">
                    <h3>Browse By Category</h3>
                </div>
            </div>

            <div class="list-category">
                <ul></ul>
            </div>
        </div>

        <div class="products">
            <div class="title-products">
                <div class="header">
                    <i></i>
                    <span>Our Products</span>
                </div>
                <div class="title">
                    <h3>Explore Our Products</h3>
                </div>
            </div>

            <div class="list-products"></div>
        </div>
        `
    },

    async afterRender() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2000,
                pauseOnMouseEnter: true,
            },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
        });

        const responseCategory = await getAllCategory();
        const { categories } = responseCategory.data;
        const wrapperListCategory = document.querySelector('.list-category ul');
        let htmlContent = '';

        categories.forEach((category) => {
            const nameCategoryLowerCase = category.name.toLowerCase();
            const elementListCategory = `
                    <li>
                        <a href="#/category/${nameCategoryLowerCase}" class="categories" id="${category.id}">
                            <img src="./icons/${nameCategoryLowerCase}.png" alt="${category.name}">
                            <h4>${category.name}</h4>
                        </a>    
                    </li>
            `;
            htmlContent += elementListCategory;
        });

        wrapperListCategory.insertAdjacentHTML('beforeend', htmlContent);


        const responseJson = await getProducts();

        if (responseJson.status === 'success' && responseJson.data && responseJson.data.products) {
            const products = responseJson.data.products;  // Ambil array produk dari response
    
            // Ambil elemen container untuk menampilkan produk
            const listProductsContainer = document.querySelector('.list-products');
    
            // Hapus konten lama sebelum menambahkan produk baru
            listProductsContainer.innerHTML = '';
    
            // Looping untuk menambahkan produk satu per satu
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
    
                // Menambahkan HTML untuk setiap produk
                productElement.innerHTML = `
                    <a href="/#/product/${product.id}"> 
                        <div class="image-product">
                            <img src="./images/${product.image_url}" alt="${product.name}">
                        </div>
                        <div class="description-product">
                            <h3>${product.name}</h3>
                            <span>Rp.${product.price}</span>
                            <div class="product-stock">
                                <span>Tersisa: ${product.stock} Stok</span>
                            </div>
                        </div>
                    </a>
                `;
    
                // Tambahkan elemen produk ke dalam container
                listProductsContainer.appendChild(productElement);
            });
        } else {
            console.error('Gagal memuat produk');
        }

        const categoriesLinks = document.querySelectorAll('a.categories');
        categoriesLinks.forEach((category) => {
            category.addEventListener('click', () => {
                const categoryId = category.id;
                localStorage.setItem('categoryId', categoryId);
            })
        })

    }
}

export default Home;