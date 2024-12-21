import { nanoid } from "nanoid";
import { getProductById, updateToken, processPayment, getUserById } from "../../data/main";
import UrlParser from "../../route/url-parser";
import { buttonAddCart } from "../../utils/cart-button";
import setupQuantityInput from "../../utils/input-quantity-product";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import { checkAuth } from "../../utils/check-auth";

const Product = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="product-detail">
            <div class="description-product">
                <div class="image-product">
                    <img src="" alt="">
                </div>
                <div class="detail-product">
                    <h2 class="product-title">Product Title</h2>
                    <p class="price">Rp999999</p>
                    <p class="description"></p>
                </div>
                <div class="transaction-product">
                    <h2>Atur jumlah dan catatan</h2>
                    <div class="stock">
                        Stok Total: <strong>13</strong>
                    </div>
                    <div class="quantity">
                        <button class="decrease-quantity">−</button>
                        <input type="number" value="1" min="1" id="quantity-input" disabled>
                        <button class="increase-quantity">+</button>
                    </div>
                    <div class="amount-price">Rp 0</div>
                    <div class="buttons">
                        <button class="buy-now">Beli Langsung</button>
                        <button class="add-cart">+ Keranjang</button>                        
                        <button class="add-wishlist"><i class="fa fa-heart-o"></i></button>                        
                    </div>
                </div>
            </div>
        </div>
        `
    },

    async afterRender() {
        // RENDER DESKRIPSI BARANG
        const { verb: productId } = UrlParser.parseActiveUrlWithoutCombiner();
        const responseJson = await getProductById(productId)
        const { name: productName, description, price, stock, image_url } = responseJson.data.product;

        document.querySelector('.product-title').textContent = productName;
        document.querySelector('.price').textContent = `Rp${Number(price).toLocaleString()}`;
        document.querySelector('.amount-price').textContent = `Rp${Number(price).toLocaleString()}`;
        document.querySelector('.stock strong').textContent = stock;
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.image-product img').src = `./images/${image_url}`;
        document.querySelector('.image-product img').alt = productName;


        // RAPIHIN TEKS DESKRIPSI
        let descriptionElement = document.querySelector('.description');
        let descriptionText = descriptionElement.innerHTML;
        let updatedDescription = descriptionText.replace(/\/br/g, '<br>');
        descriptionElement.innerHTML = updatedDescription;


        // FUNGSI INPUT JUMLAH BARANG
        let quantityInput = document.getElementById('quantity-input');
        let decreaseButton = document.querySelector('.decrease-quantity');
        let increaseButton = document.querySelector('.increase-quantity');
        const amountPrice = document.querySelector('.amount-price');

        setupQuantityInput({ quantityInput, decreaseButton, increaseButton, stock, amountPrice, price });

        // CART PRODUK
        let cartButton = document.querySelector('.add-cart');
        cartButton.addEventListener('click', async (event) => {
            event.preventDefault();
            const checkAuthResponse = await checkAuth(event);
            if (checkAuthResponse.status == 'success') {     
                const { accessToken } = checkAuthResponse.data;
                localStorage.setItem('accessToken', accessToken);

                const quantity = parseInt(localStorage.getItem('quantity'));
                const responseJson = await buttonAddCart(productId, quantity);
                if (responseJson.status === 'success') {
                    alert('Produck berhasil ditambahkan');
                } else {
                    alert('Terdapat kesalahan');
                }
            } else {
                return;
            }
        });


        // WISHLIST PRODUK
        let wishlistButton = document.querySelector('.add-wishlist');
        const refreshToken = localStorage.getItem('refreshToken');
        LikeButtonInitiator.init({ wishlistButton, productId, refreshToken });


        // BELI PRODUK
        const payButton = document.querySelector('.buy-now');
        payButton.addEventListener('click', async function (event) {
            event.preventDefault();

            const responseJson = await checkAuth(event);
            const { accessToken } = responseJson.data;
            if (responseJson.status == 'success') {     
                localStorage.setItem('accessToken', accessToken);
            } else {
                return;
            }

            // ORDER ID
            const orderId = `order-${nanoid(16)}`;
            

            // AMOUNT PRICE & QUANTITY
            const amountPrice = parseInt(localStorage.getItem('amountPriceProduct'));
            const quantity = parseInt(localStorage.getItem('quantity'));
            
            // USER
            const resultUser = await getUserById(accessToken);
            const { user } = resultUser.data;
            
            // PRODUCT
            const itemsArray = [
                {
                    "id": productId,
                    "price": price,
                    "quantity": quantity,
                    "name": productName,
                }
            ]

            const resultPayment = await processPayment({ orderId, amount: amountPrice, itemsArray, customer: user });
            console.log(resultPayment);
            const { token } = resultPayment.data.resultPayment;

            // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
            window.snap.pay(token, {
              onSuccess: function(result){
                /* You may add your own implementation here */
                alert("payment success!"); console.log(result);
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
    }
}

export default Product;