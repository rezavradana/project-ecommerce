const Login = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="login">
        <div class="container">
            <h2>Log in to E-Commerce</h2>
            <form>
                <div class="email form-input">
                    <input type="email" placeholder="Enter your Email">
                </div>
                
                <div class="password form-input">
                    <input type="password" placeholder="Enter your Password">
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
        
    }
}

export default Login;