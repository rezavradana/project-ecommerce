const Login = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="login">
            <h2>Log in to E-Commerce</h2>
            <form>
                <div class="email">
                    <input type="email" placeholder="Enter your Email">
                </div>
                
                <div class="password">
                    <input type="password" placeholder="Enter your Password">
                </div>

                <div class="button-login">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
        `;
    },

    async afterRender() {
        
    }
}

export default Login;