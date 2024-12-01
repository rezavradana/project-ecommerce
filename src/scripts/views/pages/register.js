const Register = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="register">
            <h2>Create an account</h2>
            <form>
                <div class="username">
                    <input type="text" placeholder="Enter your username">
                </div>

                <div class="email">
                    <input type="email" placeholder="Enter your Email">
                </div>
                
                <div class="password">
                    <input type="password" placeholder="Enter your Password">
                </div>

                <div class="button-register">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
        `;
    },

    async afterRender() {
        
    }
}

export default Register;