// Generated from: features\api.feature
import { test } from "playwright-bdd";

test.describe('Gestión de Documentos en API', () => {

  test.beforeEach('Background', async ({ Given, page, request }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario inicia sesion se le entrega el token', null, { page, request }); 
  });
  
  test('Crear doc por api', { tag: ['@api', '@crear'] }, async ({ Given, Then, page, request }) => { 
    await Given('que el token es correcto y sesion es valida se emite documento con folio 1015 y se recupera ID', null, { page, request }); 
    await Then('Se comprueba que documento corresponde a lo devuelto en busqueda', null, { page, request }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\api.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@api","@crear"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario inicia sesion se le entrega el token","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given que el token es correcto y sesion es valida se emite documento con folio 1015 y se recupera ID","stepMatchArguments":[{"group":{"start":73,"value":"1015"},"parameterTypeName":"int"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Se comprueba que documento corresponde a lo devuelto en busqueda","stepMatchArguments":[]}]},
]; // bdd-data-end