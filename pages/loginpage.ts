import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // 1. Definimos las variables de la página y sus elementos (Locators)
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // 2. El constructor recibe el objeto 'page' de Playwright
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#input-user'); 
    this.passwordInput = page.locator('#input-pass'); 
    this.loginButton = page.getByRole('button', { name: 'Iniciar Sesión'})
  }

  // 3. Creamos las acciones que se pueden hacer en esta pantalla
  async navegar() {
    await this.page.goto('http://localhost:3000/login');
  }

  async iniciarSesion(usuario: string, clave: string) {
    await this.usernameInput.click();
    await this.usernameInput.clear();
    await this.usernameInput.pressSequentially(usuario, { delay: 100 });
    await this.passwordInput.fill(clave);
    await this.loginButton.click();
    await this.page.waitForURL('**/dashboard', { waitUntil: 'commit', timeout: 10000 });

  }
}
