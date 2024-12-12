import { checkAuth } from "./check-auth";

const DrawerInitiator = {
    init({ wishlist, cart, loginlogout }) {
      wishlist.addEventListener('click', async (event) => {
        const responseJson = await checkAuth(event);
        if (responseJson.status == 'success') {     
            const { accessToken } = responseJson.data;
            localStorage.setItem('accessToken', accessToken);
        }
      });
  
      cart.addEventListener('click', async (event) => {
        const responseJson = await checkAuth(event);
        if (responseJson.status == 'success') {     
            const { accessToken } = responseJson.data;
            localStorage.setItem('accessToken', accessToken);
        }
      });
      
      const checkLoginStatus = () => {
        const accessToken = localStorage.getItem('accessToken');
        
        if (accessToken) {
            loginlogout.textContent = 'Logout';
            loginlogout.href = '#';
            loginlogout.addEventListener('click', (event) => {
              event.preventDefault();
              handleLogout();
            });
        } else {
            loginlogout.textContent = 'Sign Up';
            loginlogout.href = '#/login';
        }
      }

      function handleLogout() {
        loginlogout.textContent = 'Sign Up';
        localStorage.removeItem('accessToken');
        alert('You have been logged out successfully.');
        window.location.href = '#/login';
      }

      checkLoginStatus();
    },
};
  
export default DrawerInitiator;
  