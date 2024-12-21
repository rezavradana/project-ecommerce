import { addRegistration } from "../../data/main";

const Register = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="register">
        <div class="container">        
            <h2>Buat Akun</h2>
            <form id="form">
                <div class="username form-input">
                    <input type="text" placeholder="Enter your username" required id="input-username">
                </div>

                <div class="email form-input">
                    <input type="email" placeholder="Enter your Email" required id="input-email">
                </div>
                
                <div class="password form-input">
                    <input type="password" placeholder="Enter your Password" required id="input-password">
                </div>

                <div class="button-register">
                    <button type="submit">Daftar</button>
                    <span>Sudah memiliki akun? <a href="/#/login">Masuk</a></span>
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
            const username = document.querySelector('#input-username').value;
            const email = document.querySelector('#input-email').value;
            const password = document.querySelector('#input-password').value;

            const payload = { username, email, password };
            const responseJson = await addRegistration(payload);
            console.log(responseJson);
            if (responseJson.status == 'success') {
                window.location.href = '#/login';
                alert('Registrasi telah berhasil. Silahkakan login');
            } else {
                alert('Registrasi gagal dilakukan');
            }
        });
    }
}

export default Register;