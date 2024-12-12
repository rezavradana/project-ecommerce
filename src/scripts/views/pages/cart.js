import { getCart, updateToken } from "../../data/main";

const Cart = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="cart-products">
            <div class="wrapper-cart">
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
        const cartProductsElement = document.querySelector('.cart-products .wrapper-cart');
        cartProductsElement.innerHTML = ''; // Kosongkan isi sebelumnya

        const refreshToken = localStorage.getItem('refreshToken');
        const responseRefreshToken = await updateToken({ refreshToken });
        const { accessToken } = responseRefreshToken.data;

        const responseJson = await getCart(accessToken);
        const cartData = responseJson.data.carts;

        cartData.forEach(item => {
            const cartItemHTML = `
            <div class="cart-item">
                <div class="cart-image">
                <span class="cart-discount">23%</span>
                <img src="./images/${item.image_url}">
                </div>
                <div class="cart-details">
                <p class="cart-title">${item.product_name}</p>
                <div class="cart-price">
                    <span class="cart-current-price">Rp${(item.product_price * item.quantity).toLocaleString()}</span>
                </div>
                </div>
                <div class="cart-actions">
                <button class="cart-action-btn"><i class="fa fa-trash"></i></button>
                <div class="cart-quantity-control">
                    <button class="cart-quantity-btn decrease-quantity">-</button>
                    <input type="number" min="1" class="cart-quantity-input" value="${item.quantity}" disabled>
                    <button class="cart-quantity-btn increase-quantity">+</button>
                </div>
                </div>
            </div>
            `;
            cartProductsElement.insertAdjacentHTML('beforeend', cartItemHTML);
        });

        // Update total price
        const totalPrice = cartData.reduce((acc, item) => acc + item.product_price * item.quantity, 0);
        document.querySelector('.cart-transactions .total-price').innerText = `Rp${totalPrice.toLocaleString()}`;

        

    }
}

export default Cart;