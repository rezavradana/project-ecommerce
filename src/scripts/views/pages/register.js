const Register = {
    async render() {
        const mainContent = document.querySelector('#maincontent');

        mainContent.innerHTML = `
        <div class="register">
        <div class="container">        
            <h2>Create an account</h2>
            <form>
                <div class="username form-input">
                    <input type="text" placeholder="Enter your username">
                </div>

                <div class="email form-input">
                    <input type="email" placeholder="Enter your Email">
                </div>
                
                <div class="password form-input">
                    <input type="password" placeholder="Enter your Password">
                </div>

                <div class="button-register">
                    <button type="submit">Register</button>
                    <span>Already have an account? <a href="/#/login">Log in now</a></span>
                </div>
            </form>
        </div>
        </div>
        `;
    },

    async afterRender() {
        
    }
}

export default Register;