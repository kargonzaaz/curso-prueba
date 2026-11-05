import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginpage'; 
import { DashboardPage } from '../pages/dashboardpage'; 

const { Given, When } = createBdd();

Given('que el usuario está en la página de login', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  await loginPage.navegar();
});

When('ingresa su usuario {string} y contraseña {string}', async ({ page }, usuario, password) => {
  const loginPage = new LoginPage(page);
  await loginPage.iniciarSesion(usuario, password);
});

