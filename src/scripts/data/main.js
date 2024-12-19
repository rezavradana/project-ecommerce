const BASE_URL = 'http://localhost:3000';

const addRegistration = async (payload) => {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/registrations`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const tryLogin = async (payload) => {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/login`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const updateToken = async (payload) => {
    try {
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/authentications`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getProducts = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(`${BASE_URL}/products`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (productId) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(`${BASE_URL}/products/${productId}`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (accessToken) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
        };
        const response = await fetch(`${BASE_URL}/users`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const addWishlist = async (payload, accessToken) => {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/wishlist`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getWishlistById = async (accessToken) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
        };
        const response = await fetch(`${BASE_URL}/wishlist`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const checkWishlistById = async (productId, accessToken) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
        };
        const response = await fetch(`${BASE_URL}/check-wishlist/${productId}`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const deleteWishlist = async (payload, accessToken) => {
    try {
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/wishlist`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const addCart = async (payload, accessToken) => {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/cart`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getCart = async (accessToken) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
        };
        const response = await fetch(`${BASE_URL}/cart`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const updateQuantityItemInCart = async (payload, accessToken) => {
    try {
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/cart`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const deleteCart = async (payload, accessToken) => {
    try {
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload),
        };
        const response = await fetch(`${BASE_URL}/cart`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getAllCategory = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(`${BASE_URL}/categories`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getCategoryById = async (categoryId) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',              
            },
        };
        const response = await fetch(`${BASE_URL}/categories/${categoryId}`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const getProductFromCategory = async (categoryId) => {
    try {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',              
            },
        };
        const response = await fetch(`${BASE_URL}/categories/${categoryId}/products`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

const processPayment = async (payload) => {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',           
            },
            body: JSON.stringify(payload)
        };
        const response = await fetch(`${BASE_URL}/payments`, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

export { 
    addRegistration, tryLogin, getProducts, 
    getProductById, addWishlist, getWishlistById, 
    getUserById, deleteWishlist, checkWishlistById,
    addCart, getCart, updateQuantityItemInCart, 
    deleteCart, getAllCategory, getCategoryById, 
    getProductFromCategory, updateToken, processPayment
};