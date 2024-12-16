import { addWishlist, checkWishlistById, deleteWishlist, updateToken } from "../data/main";

const LikeButtonInitiator = {
  async init({ wishlistButton, productId, refreshToken }) {
    this._wishlistButton = wishlistButton;
    this._productId = productId;
    this._refreshToken = refreshToken;

    await this._renderButton();
  },

  async _renderButton() {
    const productId = this._productId;
    const refreshToken = this._refreshToken;
    const responseJson = await updateToken({ refreshToken });
    const { accessToken } = responseJson.data;

    if (await this._isWishlistExist(productId, accessToken)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isWishlistExist(productId, accessToken) {
    const restaurant = await checkWishlistById(productId, accessToken);
    if (restaurant.data.wishlist) {
        return true;
    } else {
        return false;
    }
  },

  _renderLike() {
    this._wishlistButton.innerHTML = `
        <i class="fa fa-heart-o">
    `;

    this._wishlistButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const refreshToken = this._refreshToken;
        const responseJson = await updateToken({ refreshToken });
        const { accessToken } = responseJson.data;

        const productId = this._productId;
        await addWishlist({ productId }, accessToken);
        await this._renderButton();
    })
  },

  _renderLiked() {
    this._wishlistButton.innerHTML = `
        <i class="fa fa-heart like">
    `;

    this._wishlistButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const refreshToken = this._refreshToken;
        const responseJson = await updateToken({ refreshToken });
        const { accessToken } = responseJson.data;

        const productId = this._productId;
        await deleteWishlist({ productId }, accessToken);
        await this._renderButton();
    })
  },
};

export default LikeButtonInitiator;
