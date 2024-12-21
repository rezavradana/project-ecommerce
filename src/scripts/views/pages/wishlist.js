import { addCart, deleteWishlist, getWishlistById, updateToken } from "../../data/main";

const Wishlist = {
    async render() {
        const mainContent = document.querySelector('#maincontent');
        // <div class="product-discount">-35%</div>

        mainContent.innerHTML = `
        <div class="wishlist-products"> 
            <div class="product-card">
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
        const wishlistProductsElement = document.querySelector('.wishlist-products');
        wishlistProductsElement.innerHTML = '';

        const refreshToken = localStorage.getItem('refreshToken');
        const responseRefreshToken = await updateToken({ refreshToken });
        const { accessToken } = responseRefreshToken.data;

        const responseJson = await getWishlistById(accessToken);
        
        if (responseJson.status == 'fail') {
            wishlistProductsElement.innerHTML = `
                <div>Wishlist masih kosong</div>
            `;
            return;
        }

        const wishlists = responseJson.data.wishlists;

        wishlists.forEach(wishlist => {
            const wishlistItemHTML = `
            <div class="product-card">
                <button class="product-trash" id="${wishlist.id}">
                    <i class="fa fa-trash"></i>
                </button>
                <img src="./images/${wishlist.image_url}" class="product-image" />
                <button class="product-cart-btn" id="${wishlist.id}">Add To Cart</button>
                <h3 class="product-title">${wishlist.name}</h3>
                <div class="product-price">
                    <span class="current-price">Rp${(wishlist.price * 1).toLocaleString()}</span>
                </div>
            </div>
            `
            wishlistProductsElement.insertAdjacentHTML('beforeend', wishlistItemHTML);
        });


        // BUTTON TRASH DELETE
        const buttonsDelete = document.querySelectorAll('.product-trash');

        buttonsDelete.forEach(buttonDelete => {
            const productId = buttonDelete.id;
            buttonDelete.addEventListener('click', async function(event) {
                event.preventDefault();
                await deleteWishlist({ productId }, accessToken);
                window.location.reload();
            });
        });


        // BUTTON ADD CART
        const buttonsCart = document.querySelectorAll('.product-cart-btn');

        buttonsCart.forEach(buttonCart => {
            const productId = buttonCart.id;
            buttonCart.addEventListener('click', async function(event) {
                event.preventDefault();
                await addCart({ productId, quantity: 1 }, accessToken);
                alert('berhasil menambahkan ke keranjang');
                window.location.href = "#/cart";
            });
        });


    }
}

export default Wishlist;