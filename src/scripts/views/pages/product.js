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
                <h1 class="product-title">Product Title</h1>
                <p class="price">Rp999999</p>
                <div class="rating">
                    ⭐⭐⭐⭐⭐ <span>(628 rating)</span>
                </div>
                <p class="description">
                    Pembersih wajah dengan busa bouncy dengan soft-melting cellulose beads yang sepenuhnya menghilangkan sisa riasan dan kotoran dari dalam pori-pori.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto consequuntur dolore eius quis illo quidem laboriosam, nihil cum voluptate! Labore repellat necessitatibus aspernatur natus quidem cupiditate eveniet quisquam ex earum? Pariatur commodi adipisci sunt nihil ipsum possimus totam odit. Porro est architecto voluptatem odit ipsum quo suscipit rerum ad itaque temporibus, voluptas aspernatur, dolorum tenetur beatae? Nesciunt vero repellendus eligendi. Ducimus adipisci vero illo placeat itaque repellat amet esse libero eos, ut perferendis, provident excepturi eum quas vitae distinctio iure aliquid laudantium quo obcaecati exercitationem reiciendis nihil, eligendi ex. Recusandae sint id doloremque neque sunt itaque officia excepturi qui.
                </p>
            </div>
            <div class="transaction-product">
                <h1>Atur jumlah dan catatan</h1>
                <div class="stock">
                    Stok Total: <strong>13</strong>
                </div>
                <div class="quantity">
                    <button class="decrease-quantity">−</button>
                    <input type="number" value="1" min="1" disabled>
                    <button class="increase-quantity">+</button>
                </div>
                <div class="price">Rp29.600</div>
                <div class="buttons">
                    <button class="buy-now">Beli Langsung</button>
                    <button class="add-cart">+ Keranjang</button>
                    <button class="add-wishlist">&#9825;</button>
                </div>
            </div>
        </div>
        </div>
    
        <div class="reviews">
            <h2 class="review-title">Ulasan Pembeli</h2>
            <div class="review-item">
                <p class="review-text">Fast response, pengiriman cepat, selalu dapat diskon & bonus! - oleh L***s</p>
            </div>
            <div class="review-item">
                <p class="review-text">Produk bagus, recommended! - oleh A***y</p>
            </div>
        </div>
        `
    },

    async afterRender() {

    }
}

export default Product;