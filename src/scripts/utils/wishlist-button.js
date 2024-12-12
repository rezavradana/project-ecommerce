// import { addWishlist, deleteWishlist, updateToken } from "../data/main";

// // Fungsi untuk menambah item ke wishlist
// async function buttonAddWishlist(wishlistButton, productId) {
//     // Ubah ikon menjadi ❤️️ (dengan kode HTML)
//     wishlistButton.innerHTML = "❤️"; // Kode untuk hati merah

//     const refreshToken = localStorage.getItem('refreshToken');
//     const responseRefreshToken = await updateToken({ refreshToken });
//     const { accessToken } = responseRefreshToken.data;
    
//     const responseJson = await addWishlist({ productId }, accessToken);
// }

// // Fungsi untuk menghapus item dari wishlist
// async function buttonDeleteWishlist(wishlistButton, productId) {
//     // Ubah ikon menjadi &#9825; (dengan kode HTML)
//     wishlistButton.innerHTML = "&#9825;"; // Kode untuk love kosong

//     const refreshToken = localStorage.getItem('refreshToken');
//     const responseRefreshToken = await updateToken({ refreshToken });
//     const { accessToken } = responseRefreshToken.data;
    
//     const responseJson = await deleteWishlist({ productId }, accessToken);
// }

// export { buttonAddWishlist, buttonDeleteWishlist }
