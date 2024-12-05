const Cart = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="cart-products">
        <div class="wrapper-cart">
            <div class="cart-item">
                <div class="cart-image">
                    <span class="cart-discount">23%</span>
                    <img src="">
                </div>
                <div class="cart-details">
                    <p class="cart-title">PONDS Men Acne Solution Facial Foam 50g</p>
                    <div class="cart-price">
                    <span class="cart-current-price">Rp28.500</span>
                    <span class="cart-original-price">Rp37.200</span>
                    </div>
                </div>
                <div class="cart-actions">
                    <button class="cart-action-btn"><i class="fa fa-trash"></i></button>
                    <div class="cart-quantity-control">
                    <button class="cart-quantity-btn">-</button>
                    <input type="text" class="cart-quantity-input" value="1" readonly>
                    <button class="cart-quantity-btn">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-item">
                <div class="cart-image">
                    <span class="cart-discount">23%</span>
                    <img src="">
                </div>
                <div class="cart-details">
                    <p class="cart-title">PONDS Men Acne Solution Facial Foam 50g</p>
                    <div class="cart-price">
                    <span class="cart-current-price">Rp28.500</span>
                    <span class="cart-original-price">Rp37.200</span>
                    </div>
                </div>
                <div class="cart-actions">
                    <button class="cart-action-btn"><i class="fa fa-trash"></i></button>
                    <div class="cart-quantity-control">
                    <button class="cart-quantity-btn">-</button>
                    <input type="text" class="cart-quantity-input" value="1" readonly>
                    <button class="cart-quantity-btn">+</button>
                    </div>
                </div>
            </div>
        </div>
            <div class="cart-transactions">
                <div class="title-transactions">
                    <p class="title">Ringkasan Belanja</p>
                    <div class="price">
                        <p>Total</p>
                        <p class="total-price">Rp28.500</p>
                    </div>
                </div>
                <div class="button-transactions">
                    <button class="cart-transactions-btn">Beli</button>
                </div>
            </div>
        </div>
        `;
    },

    async afterRender() {

    }
}

export default Cart;