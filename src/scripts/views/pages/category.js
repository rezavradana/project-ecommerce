import UrlParser from '../../route/url-parser';
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

    }
}

export default Category;