import { Page, Locator, expect, APIRequestContext } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly nuevoDocumento: Locator;
  readonly tituloesperadoPopup: Locator;
  readonly tipoDocSelect: Locator;
  readonly calendar: Locator;
  readonly folio: Locator;
  readonly rut: Locator;
  readonly montoInput: Locator;
  readonly guardarEmitirBtn: Locator;
  readonly verificarExito: Locator;
  readonly fillBuscar: Locator;
  readonly botonBuscar: Locator;
  readonly filasTabla: Locator;
  readonly hoy: string;
  readonly miRut: string;
  readonly botonGuardar: Locator;
  readonly inputCorreo: Locator;
  readonly correo: string;
  readonly recargar: Locator;
  readonly tituloesperadoEliminar: Locator;
  readonly botonEliminar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nuevoDocumento = page.getByRole('button', { name: 'Nuevo documento' });
    this.tituloesperadoPopup = page.getByText('Emitir nuevo documento')
    this.tipoDocSelect = page.getByRole('combobox', { name: 'Tipo de documento tributario' });
    this.calendar = page.locator('#input-fecha-emision');
    this.folio = page.locator('#input-folio');
    this.rut = page.locator('#input-rut-receptor');
    this.montoInput = page.locator('#input-monto');
    this.guardarEmitirBtn = page.getByRole('button', { name: 'Guardar y emitir' });
    this.verificarExito = page.locator('div[role="status"]').filter({ hasText: 'Documento folio' });
    this.fillBuscar = page.getByPlaceholder('Buscar por RUT Receptor (ej. 76.192.584-9)...');
    this.botonBuscar = page.getByRole('button', { name: 'Buscar' });
    this.filasTabla = this.page.locator('table[aria-label="Tabla de Documentos Tributarios"] tbody tr');
    this.hoy = new Date().toISOString().split('T')[0];
    this.miRut = "20.045.769-2"
    this.botonGuardar = page.getByRole('button', { name: 'Guardar cambios' });
    this.inputCorreo = page.locator('#input-contact-email');
    this.correo = "kgonzalez@azurian.com"
    this.recargar = page.getByRole('button', { name: 'Recargar tabla' });
    this.tituloesperadoEliminar = page.locator('#delete-dialog-title');
    this.botonEliminar = page.getByRole('button', { name: 'Eliminar documento' });
  }

  async navegar() {
    await this.page.goto('http://localhost:3000/dashboard');
  }

  async abrirPopUP() {
    await this.nuevoDocumento.click();
    await expect(this.tituloesperadoPopup).toHaveText('Emitir nuevo documento');
  }


  async relllenarFormulario(tipoDoc: string, folio: string) {
    await this.tipoDocSelect.selectOption({ value: tipoDoc });
    await this.calendar.fill(this.hoy);
    await this.folio.fill(folio);
    await this.rut.fill(this.miRut);
    await this.montoInput.fill('1008')
    await this.guardarEmitirBtn.click();
    await expect(this.verificarExito).toHaveText('Documento folio ' + folio + ' emitido correctamente.');
  }

  async buscarComprobarDoc(tipoDoc: string, folio: string) {
    await this.fillBuscar.fill(this.miRut);
    await this.botonBuscar.click();
    await this.page.waitForTimeout(5000);
    const filaBase = 'table[aria-label="Tabla de Documentos Tributarios"] tbody tr';
    const filaFolio: string = await this.page.locator(`${filaBase} td:nth-child(1)`).first().innerText();
    const tipoDTE: string = await this.page.locator(`${filaBase} td:nth-child(2)`).first().innerText();
    const rutRecep: string = await this.page.locator(`${filaBase} td:nth-child(3)`).first().innerText();
    const monTotal: string = await this.page.locator(`${filaBase} td:nth-child(4)`).first().innerText();
    const estadoDTE: string = await this.page.locator(`${filaBase} td:nth-child(6)`).first().innerText();
    await expect(filaFolio).toBe('#' + folio);
    await expect(tipoDTE).toBe(tipoDoc);
    await expect(rutRecep).toBe(this.miRut);
    await expect(monTotal).toBe('$ 1.008 CLP');
    await expect(estadoDTE).toBe('Pendiente');
  }
  async buscarRutRecep(rutRecep: string) {
    await this.fillBuscar.fill(rutRecep);
    await this.botonBuscar.click();
    await this.page.waitForTimeout(10000);
  }

  async buscarFolioEspecifico(folio: string) {
    const filaFolioEncontrado: Locator = this.filasTabla.filter({
      has: this.page.locator('td:nth-child(1)', { hasText: '#' + folio })
    });
    await filaFolioEncontrado.getByRole('button', { name: new RegExp(`Ver detalle de folio ${folio}`) }).click();
    await this.page.waitForTimeout(10000);
  }

  async comprobarDetalle() {
    const parrafosLocator = this.page.locator('#detail-modal-title + div p');
    await parrafosLocator.first().waitFor({ state: 'visible' });
    const textosDeTodosLosP: string[] = await parrafosLocator.allInnerTexts();
    expect(textosDeTodosLosP[0]).toBe('Tipo: DTE 34');
    expect(textosDeTodosLosP[1]).toBe('RUT Receptor: 76.123.456-0');
    expect(textosDeTodosLosP[2]).toBe('Monto: $ 447.500 CLP');
    expect(textosDeTodosLosP[3]).toBe('Fecha Emisión: 2026-09-26');
    expect(textosDeTodosLosP[4]).toBe('Estado:\nAceptado');
    expect(textosDeTodosLosP[5]).toBe('Canal: PORTAL');
    expect(textosDeTodosLosP[6]).toBe('Copia al contacto: No');
  }

  async buscarAbrirEdicion(folio: string) {
    const filaFolioEncontrado: Locator = this.filasTabla.filter({
      has: this.page.locator('td:nth-child(1)', { hasText: folio })
    });
    await filaFolioEncontrado.getByRole('button', { name: new RegExp(`Editar folio ${folio}`) }).click();
  }

  async buscarAbrirEliminar(folio: string) {
    const filaFolioEncontrado: Locator = this.filasTabla.filter({
      has: this.page.locator('td:nth-child(1)', { hasText: folio })
    });
    await filaFolioEncontrado.getByRole('button', { name: new RegExp(`Eliminar folio ${folio}`) }).click();
  }

  async comprobarEliminar() {
    await expect(this.tituloesperadoEliminar).toHaveText('Eliminar documento');
    const parrafosLocator = this.page.locator('#delete-dialog-description');
    await parrafosLocator.first().waitFor({ state: 'visible' });
    const textosDeTodosLosP: string[] = await parrafosLocator.allInnerTexts();
    expect(textosDeTodosLosP[0]).toBe('¿Confirmas que deseas eliminar el documento DTE 39 folio #7502 del RUT 12.345.678-5? Esta acción no se puede deshacer.');
    await this.botonEliminar.click();

  }

  async buscarEliminado(folio: string) {
    const filaFolioEncontrado: Locator = this.filasTabla.filter({
      has: this.page.locator('td:nth-child(1)', { hasText: folio })
    }); await expect(filaFolioEncontrado).toBeHidden();
  }

  async editarMontoYCanal() {
    await this.montoInput.fill('1200');
    await this.page.getByLabel(`Correo electrónico`).check();
    await expect(this.page.getByLabel(`Correo electrónico`), 'No esta selecionado').toBeChecked();
    await this.inputCorreo.fill(this.correo);
    await this.botonGuardar.click();
  }

  async VerificarCambios(folio: string) {
    await expect(this.verificarExito).toHaveText('Documento folio ' + folio + ' actualizado correctamente.');
    await this.recargar.click();
    const parrafosLocator = this.page.locator('#detail-modal-title + div p');
    const filaFolioEncontrado: Locator = this.filasTabla.filter({
      has: this.page.locator('td:nth-child(1)', { hasText: folio })
    });
    await filaFolioEncontrado.getByRole('button', { name: new RegExp(`Ver detalle de folio ${folio}`) }).click();
    await parrafosLocator.first().waitFor({ state: 'visible' });
    const textosDeTodosLosP: string[] = await parrafosLocator.allInnerTexts();
    console.log(parrafosLocator)
    expect(textosDeTodosLosP[0]).toBe('Tipo: DTE 39');
    expect(textosDeTodosLosP[1]).toBe('RUT Receptor: 12.345.678-5');
    expect(textosDeTodosLosP[2]).toBe('Monto: $ 1.200 CLP');
    expect(textosDeTodosLosP[3]).toBe('Fecha Emisión: 2026-09-24');
    expect(textosDeTodosLosP[4]).toBe('Estado:\nPendiente');
    expect(textosDeTodosLosP[5]).toBe('Canal: EMAIL');
    expect(textosDeTodosLosP[6]).toBe('Copia al contacto: No');
    expect(textosDeTodosLosP[7]).toBe('Correo de contacto: kgonzalez@azurian.com');
  }
}
