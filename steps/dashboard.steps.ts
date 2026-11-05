import { createBdd } from 'playwright-bdd';
import { DashboardPage } from '../pages/dashboardpage'; 

const { Given, When, Then } = createBdd();

Given('que el usuario está en la página principal', async ({ page }) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.navegar();
})

When('abre el pop up de crear documento', async ({ page }) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.abrirPopUP();
  
})

Then('ingresar datos de {string} con folio {string}', async ({ page },tipoDoc,folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.relllenarFormulario(tipoDoc,folio);
})

Then('comprobar que documento {string} con folio {string} fue emitido y se encuentra en grilla', async ({ page },tipoDoc,folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.buscarComprobarDoc(tipoDoc,folio);
})

When('busca el rut de receptor con multiples documentos {string}', async ({ page },rutRecep) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.buscarRutRecep(rutRecep);
})
Then('encuentra Documento con folio {string} y se verifica informacion', async ({ page },folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.buscarFolioEspecifico(folio)
  await dashboardPage.comprobarDetalle();
})

When('encuentra Documento con folio {string} y se edita', async ({ page },folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.buscarAbrirEdicion(folio);
  await dashboardPage.editarMontoYCanal();
})

Then('verifica el aviso, la fila actualizada de folio {string} y que el cambio persiste al recargar.', async ({ page },folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.VerificarCambios(folio);
})


When('encuentra Documento con folio {string} y se da click en eliminar', async ({ page },folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.buscarAbrirEliminar(folio);
})

Then('se confirma la elimacion de documento con folio {string}', async ({ page },folio) => {
  const dashboardPage = new DashboardPage(page); 
  await dashboardPage.comprobarEliminar();
  await dashboardPage.buscarEliminado(folio);
})






;
