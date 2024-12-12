import { tryLogin } from '../../data/main';

const Login = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="login">
        <div class="container">
            <h2>Log in to E-Commerce</h2>
            <form id="form">
                <div class="email form-input">
                    <input id="input-email" type="email" placeholder="Enter your Email" required>
                </div>
                
                <div class="password form-input">
                    <input id="input-password" type="password" placeholder="Enter your Password" required>
                </div>

                <div class="button-login">
                    <button type="submit">Log In</button>
                    <span>Don't have an account? <a href="/#/register">Sign up now</a></span>
                </div>
            </form>
        </div>
        </div>
        `;
    },
    async afterRender() {
        const form = document.querySelector('#form');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = document.querySelector('#input-email').value;
            const password = document.querySelector('#input-password').value;

            const payload = { email, password };
            const responseJson = await tryLogin(payload);

            if (responseJson.status == 'success') {
                // Jika berhasil ambil token simpan di local storage
                const { accessToken, refreshToken } = responseJson.data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);


                // Jika berhasil direct ke home dan ganti navbar menjadi logout
                window.location.href = '#/home';
                const links = document.querySelectorAll('a');
                links.forEach(link => {
                    if (link.textContent.trim() === "Sign Up") {
                        link.textContent = "Logout";
                        link.href = "#";
                    }
                });
            } else {
                alert('Terjadi kesalahan dalam email atau password');
            }

        });
    }
}

export default Login;