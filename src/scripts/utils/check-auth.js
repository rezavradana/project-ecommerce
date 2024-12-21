import { updateToken } from "../data/main";

async function checkAuth(event) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // Periksa token
    if (!accessToken || !refreshToken) {
        alert('Anda harus login untuk mengakses halaman ini.');
        event.preventDefault();
        window.location.href = '#/login';
        return false;
    }

    // Validasi token
    const isTokenValid = await validateToken(refreshToken);
    if (!isTokenValid) {
        alert('Sesi Anda telah berakhir, silakan login kembali.');
        event.preventDefault();
        window.location.href = '#/login';
        return false;
    }

    return isTokenValid;
}

async function validateToken(refreshToken) {
    try {
        const responseJson = await updateToken({ refreshToken });
        return responseJson;
    } catch (error) {
        console.error('Token tidak valid:', error);
        return false;
    }
}

export { checkAuth, validateToken };
