const Home = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="jumbotron">
            <div class="slideshow">
                <img src="" alt="" class="active black">
            </div>
        </div>

        <div class="category">
            <div class="title-category">
                <div class="header">
                    <i></i>
                    <span>Categories</span>
                </div>
                <div class="title">
                    <h1>Browse By Category</h1>
                </div>
            </div>

            <div class="list-category">
                <ul>
                    <li>
                        <i class="fa fa-mobile"></i>
                        <a href="#/category/phones">Phones</a>
                    </li>
                    <li>
                        <i class="fa fa-twitter"></i>
                        <a href="#/category/computers">Computers</a>
                    </li>
                    <li>
                        <i class="fa fa-cutlery"></i>
                        <a href="#/category/foodsdrinks">Foods & Drinks</a>
                    </li>
                    <li>
                        <i class="fa fa-user"></i>
                        <a href="#/category/fashion">Fashion</a>
                    </li>
                    <li>
                        <i class="fa fa-instagram"></i>
                        <a href="#/category/accessories">Accesories</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="products">
            <div class="title-products">
                <div class="header">
                    <i></i>
                    <span>Our Products</span>
                </div>
                <div class="title">
                    <h1>Explore Our Products</h1>
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

    }
}

export default Home;