Feature: Gestión de Documentos en API

  Background:
    Given que el usuario inicia sesion se le entrega el token

  @api @crear 
  Scenario: Crear doc por api
    Given que el token es correcto y sesion es valida se emite documento con folio 1015 y se recupera ID
    Then Se comprueba que documento corresponde a lo devuelto en busqueda


  @api @buscar
  Scenario: Buscar doc por api
    Given que el token es correcto y sesion es valida se emite documento con folio 1016
    When filtro el listado de documentos por rut "76.192.083-9" y tipo "DTE 33"
    Then la respuesta del listado tiene código de estado 200 y se refleja al menos 1 documento coincidente





