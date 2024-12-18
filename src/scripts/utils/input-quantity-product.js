// Fungsi untuk mengatur input number dan tombol quantity
function setupQuantityInput({ quantityInput, decreaseButton, increaseButton, stock, amountPrice, price }) {
    // Set nilai max untuk input number
    quantityInput.max = stock;
    localStorage.setItem('quantity', 1);
    
    const updatePrice = () => {
        const totalPrice = price * quantityInput.value;
        amountPrice.innerText = `Rp${totalPrice.toLocaleString()}`;

        amountPrice.dataset.unitPrice = price;
    };

    // Fungsi untuk mengurangi jumlah
    decreaseButton.addEventListener('click', function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            localStorage.setItem('quantity', quantityInput.value)

            updatePrice();
        }
    });
    
    // Fungsi untuk menambah jumlah
    increaseButton.addEventListener('click', function() {
        if (quantityInput.value < stock) {
            quantityInput.value++;
            localStorage.setItem('quantity', quantityInput.value)
            
            updatePrice();
        }
    });

    updatePrice();
}

export default setupQuantityInput;
