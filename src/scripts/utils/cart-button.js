import { addCart, deleteCart, updateToken } from "../data/main";

async function buttonAddCart(productId, quantity) {
    const refreshToken = localStorage.getItem('refreshToken');
    const responseRefreshToken = await updateToken({ refreshToken });
    const { accessToken } = responseRefreshToken.data;
    
    const responseJson = await addCart({ productId, quantity }, accessToken);
    return responseJson;
}

async function buttonDeleteCart(productId) {
    const refreshToken = localStorage.getItem('refreshToken');
    const responseRefreshToken = await updateToken({ refreshToken });
    const { accessToken } = responseRefreshToken.data;
    
    const responseJson = await deleteCart({ productId }, accessToken);
    return responseJson;
}

export { buttonAddCart, buttonDeleteCart };