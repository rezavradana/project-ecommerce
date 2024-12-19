import { updateQuantityItemInCart, updateToken } from "../data/main";

async function setupQuantityInput({ quantityInput, decreaseButton, increaseButton, stock, amountPrice, price, updateTotalPrice, refreshToken, productId }) {
    // Set nilai max untuk input number
    quantityInput.max = stock;
    const responseRefreshToken = await updateToken({ refreshToken });
    const { accessToken } = responseRefreshToken.data;
    
    const updatePrice = () => {
        const totalPrice = price * quantityInput.value;
        amountPrice.innerText = `Rp${totalPrice.toLocaleString()}`;

        amountPrice.dataset.unitPrice = price;
        updateTotalPrice();

    };
    
    // Fungsi untuk mengurangi jumlah
    decreaseButton.addEventListener('click', async function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            localStorage.setItem('quantity', quantityInput.value)
            const quantityInputValue = parseInt(quantityInput.value)
            
            updatePrice();
            await updateQuantityItemInCart({ productId,  quantity: quantityInputValue}, accessToken)
        }
    });
    
    // Fungsi untuk menambah jumlah
    increaseButton.addEventListener('click', async function() {
        if (quantityInput.value < stock) {
            quantityInput.value++;
            localStorage.setItem('quantity', quantityInput.value)
            const quantityInputValue = parseInt(quantityInput.value)
            
            updatePrice();
            await updateQuantityItemInCart({ productId,  quantity: quantityInputValue}, accessToken)

        }
    });

    updatePrice();
}

export default setupQuantityInput;
