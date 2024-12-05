const Wishlist = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="wishlist-products"> 
            <div class="product-card">
                <div class="product-discount">-35%</div>
                <button class="product-trash">
                    <i class="fa fa-trash"></i>
                </button>
                <img src="" class="product-image" />
                <button class="product-cart-btn">Add To Cart</button>
                <h3 class="product-title">Gucci duffle bag</h3>
                <div class="product-price">
                    <span class="current-price">$960</span>
                    <span class="original-price">$1160</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-discount">-35%</div>
                <button class="product-trash">
                    <i class="fa fa-trash"></i>
                </button>
                <img src="" class="product-image" />
                <button class="product-cart-btn">Add To Cart</button>
                <h3 class="product-title">Gucci duffle bag</h3>
                <div class="product-price">
                    <span class="current-price">$960</span>
                    <span class="original-price">$1160</span>
                </div>
            </div>
        </div>
        `;
    },

    async afterRender() {

    }
}

export default Wishlist;