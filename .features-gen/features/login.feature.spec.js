// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Gestión de Documentos', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario está en la página de login', null, { page }); 
    await When('ingresa su usuario "admin@azurian.com" y contraseña "Azurian2026!"', null, { page }); 
  });
  
  test('Abrir el pop up de crear documento', { tag: ['@ui', '@crear'] }, async ({ Given, When, Then, page }) => { 
    await Given('que el usuario está en la página principal', null, { page }); 
    await When('abre el pop up de crear documento', null, { page }); 
    await Then('ingresar datos de "DTE 33" con folio "1999"', null, { page }); 
    await Then('comprobar que documento "DTE 33" con folio "1999" fue emitido y se encuentra en grilla', null, { page }); 
  });

  test('Buscar documentos por RUT de receptor', { tag: ['@ui', '@buscar'] }, async ({ Given, When, Then, page }) => { 
    await Given('que el usuario está en la página principal', null, { page }); 
    await When('busca el rut de receptor con multiples documentos "76.123.456-0"', null, { page }); 
    await Then('encuentra Documento con folio "8601" y se verifica informacion', null, { page }); 
  });

  test('Editar documentos', { tag: ['@ui', '@editar'] }, async ({ Given, When, Then, page }) => { 
    await Given('que el usuario está en la página principal', null, { page }); 
    await When('encuentra Documento con folio "7502" y se edita', null, { page }); 
    await Then('verifica el aviso, la fila actualizada de folio "7502" y que el cambio persiste al recargar.', null, { page }); 
  });

  test('Eliminar documentos', { tag: ['@ui', '@eliminar'] }, async ({ Given, When, And, page }) => { 
    await Given('que el usuario está en la página principal', null, { page }); 
    await When('encuentra Documento con folio "7502" y se da click en eliminar', null, { page }); 
    await And('se confirma la elimacion de documento con folio "7502"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@ui","@crear"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa su usuario \"admin@azurian.com\" y contraseña \"Azurian2026!\"","isBg":true,"stepMatchArguments":[{"group":{"start":19,"value":"\"admin@azurian.com\"","children":[{"start":20,"value":"admin@azurian.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"Azurian2026!\"","children":[{"start":53,"value":"Azurian2026!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página principal","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When abre el pop up de crear documento","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then ingresar datos de \"DTE 33\" con folio \"1999\"","stepMatchArguments":[{"group":{"start":18,"value":"\"DTE 33\"","children":[{"start":19,"value":"DTE 33","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"1999\"","children":[{"start":38,"value":"1999","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then comprobar que documento \"DTE 33\" con folio \"1999\" fue emitido y se encuentra en grilla","stepMatchArguments":[{"group":{"start":24,"value":"\"DTE 33\"","children":[{"start":25,"value":"DTE 33","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"1999\"","children":[{"start":44,"value":"1999","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@ui","@buscar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa su usuario \"admin@azurian.com\" y contraseña \"Azurian2026!\"","isBg":true,"stepMatchArguments":[{"group":{"start":19,"value":"\"admin@azurian.com\"","children":[{"start":20,"value":"admin@azurian.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"Azurian2026!\"","children":[{"start":53,"value":"Azurian2026!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página principal","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When busca el rut de receptor con multiples documentos \"76.123.456-0\"","stepMatchArguments":[{"group":{"start":50,"value":"\"76.123.456-0\"","children":[{"start":51,"value":"76.123.456-0","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then encuentra Documento con folio \"8601\" y se verifica informacion","stepMatchArguments":[{"group":{"start":30,"value":"\"8601\"","children":[{"start":31,"value":"8601","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":22,"tags":["@ui","@editar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa su usuario \"admin@azurian.com\" y contraseña \"Azurian2026!\"","isBg":true,"stepMatchArguments":[{"group":{"start":19,"value":"\"admin@azurian.com\"","children":[{"start":20,"value":"admin@azurian.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"Azurian2026!\"","children":[{"start":53,"value":"Azurian2026!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página principal","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When encuentra Documento con folio \"7502\" y se edita","stepMatchArguments":[{"group":{"start":30,"value":"\"7502\"","children":[{"start":31,"value":"7502","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then verifica el aviso, la fila actualizada de folio \"7502\" y que el cambio persiste al recargar.","stepMatchArguments":[{"group":{"start":48,"value":"\"7502\"","children":[{"start":49,"value":"7502","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":28,"tags":["@ui","@eliminar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When ingresa su usuario \"admin@azurian.com\" y contraseña \"Azurian2026!\"","isBg":true,"stepMatchArguments":[{"group":{"start":19,"value":"\"admin@azurian.com\"","children":[{"start":20,"value":"admin@azurian.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"Azurian2026!\"","children":[{"start":53,"value":"Azurian2026!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given que el usuario está en la página principal","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When encuentra Documento con folio \"7502\" y se da click en eliminar","stepMatchArguments":[{"group":{"start":30,"value":"\"7502\"","children":[{"start":31,"value":"7502","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And se confirma la elimacion de documento con folio \"7502\"","stepMatchArguments":[{"group":{"start":48,"value":"\"7502\"","children":[{"start":49,"value":"7502","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end