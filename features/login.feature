Feature: Gestión de Documentos

  Background:
    Given que el usuario está en la página de login
    When ingresa su usuario "admin@azurian.com" y contraseña "Azurian2026!"


  @ui @crear 
  Scenario: Abrir el pop up de crear documento
    Given que el usuario está en la página principal
    When abre el pop up de crear documento
    Then ingresar datos de "DTE 33" con folio "1999"
    Then comprobar que documento "DTE 33" con folio "1999" fue emitido y se encuentra en grilla
 
  @ui @buscar
  Scenario: Buscar documentos por RUT de receptor
    Given que el usuario está en la página principal
    When busca el rut de receptor con multiples documentos "76.123.456-0"
    Then encuentra Documento con folio "8601" y se verifica informacion

  @ui @editar
  Scenario: Editar documentos
    Given que el usuario está en la página principal
    When encuentra Documento con folio "7502" y se edita
    Then verifica el aviso, la fila actualizada de folio "7502" y que el cambio persiste al recargar.

  @ui @eliminar
  Scenario: Eliminar documentos
    Given que el usuario está en la página principal
    When encuentra Documento con folio "7502" y se da click en eliminar
    And se confirma la elimacion de documento con folio "7502"
