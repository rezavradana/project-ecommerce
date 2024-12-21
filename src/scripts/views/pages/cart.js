import { getCart, getUserById, processPayment, updateToken } from "../../data/main";
import setupQuantityInput from "../../utils/input-quantity-cart";
import { buttonDeleteCart } from "../../utils/cart-button";
import { nanoid } from "nanoid";

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
                        <p class="total-price">Rp 0</p>
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
        if (cartData.length === 0) {
            cartProductsElement.innerHTML = `
                <div>Keranjang masih kosong</div>
            `;

            const payButton = document.querySelector('.cart-transactions-btn');
            payButton.addEventListener('click', (event) => {
                event.preventDefault();
                alert('Keranjang masih kosong. Silahkan cari produk terlebih dahulu');
            })
            return;
        }

        function updateTotalPrice() {
            const cartItems = document.querySelectorAll('.cart-item');
            let totalPrice = 0;
        
            cartItems.forEach(item => {
                const currentPrice = item.querySelector('.cart-current-price');
                const price = parseFloat(currentPrice.innerText.replace('Rp', '').replaceAll('.', ''));
                totalPrice += price;
            });

            
            document.querySelector('.cart-transactions .total-price').innerText = `Rp${totalPrice.toLocaleString()}`;
            return totalPrice;
        }

        for (const item of cartData) {         
            const cartItemHTML = `
            <div class="cart-item" data-product-id="${item.product_id}">
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
                <button class="delete-cart cart-action-btn" id="${item.product_id}"><i class="fa fa-trash"></i></button>
                <div class="cart-quantity-control">
                    <button class="cart-quantity-btn decrease-quantity">-</button>
                    <input type="number" min="1" class="cart-quantity-input" value="${item.quantity}" disabled>
                    <button class="cart-quantity-btn increase-quantity">+</button>
                </div>
                </div>
            </div>
            `;
            cartProductsElement.insertAdjacentHTML('beforeend', cartItemHTML);
 
            // FUNGSI INPUT JUMLAH BARANG
            const cartItemElement = cartProductsElement.querySelector(`.cart-item[data-product-id="${item.product_id}"]`);
            const cartQuantityInput = cartItemElement.querySelector('.cart-quantity-input');
            const decreaseButton = cartItemElement.querySelector('.decrease-quantity');
            const increaseButton = cartItemElement.querySelector('.increase-quantity');
            const amountPrice = cartItemElement.querySelector('.cart-current-price');

            setupQuantityInput({ 
                quantityInput:cartQuantityInput, 
                decreaseButton, 
                increaseButton,
                stock: item.product_stock, 
                amountPrice, 
                price: item.product_price,
                updateTotalPrice,
                refreshToken,
                productId: item.product_id,
            });

            const deleteCartButton = cartItemElement.querySelector('.delete-cart');
                deleteCartButton.addEventListener('click', async (event) => {
                    event.preventDefault();
                    await buttonDeleteCart(item.product_id);
                    window.location.reload();
            });

            const totalPrice = cartData.reduce((acc, item) => acc + item.product_price * item.quantity, 0);
            document.querySelector('.cart-transactions .total-price').innerText = `Rp${totalPrice.toLocaleString()}`;  
        };

        const payButton = document.querySelector('.cart-transactions-btn');
        payButton.addEventListener('click', async (event) => {
            event.preventDefault();
            const orderId = `order-${nanoid(16)}`;

            const refreshToken = localStorage.getItem('refreshToken');
            const responseRefreshToken = await updateToken({ refreshToken });
            const { accessToken } = responseRefreshToken.data;

            const resultUser = await getUserById(accessToken);
            const { user } = resultUser.data;

            const responseJson = await getCart(accessToken);
            const cartData = responseJson.data.carts;
            
            const itemsArray = cartData.map(item => ({
                id: item.product_id,
                price: item.product_price,
                quantity: item.quantity,
                name: item.product_name
            }));

            const amountPrice = updateTotalPrice();

            const resultPayment = await processPayment({ orderId, amount: amountPrice, itemsArray, customer: user });
            const { token } = resultPayment.data.resultPayment;

            // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
            window.snap.pay(token, {
                onSuccess: function(result){
                  /* You may add your own implementation here */
                  alert("Pembayaran berhasil! Silahkan cek di email Anda"); console.log(result);
                },
                onPending: function(result){
                  /* You may add your own implementation here */
                  alert("wating your payment!"); console.log(result);
                },
                onError: function(result){
                  /* You may add your own implementation here */
                  alert("payment failed!"); console.log(result);
                },
                onClose: function(){
                  /* You may add your own implementation here */
                  alert('you closed the popup without finishing the payment');
                }
            })
        });
    },
};


export default Cart;