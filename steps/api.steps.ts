import { createBdd } from 'playwright-bdd';
import { ApiPage } from '../pages/apipage'; 

const { Given, When, Then } = createBdd();

let tokenCompartido: string;
let idEmitido:string;
let jsonRespuesta:JSON;

Given('que el usuario inicia sesion se le entrega el token', async ({ page, request }) => {
    const apiPage = new ApiPage(page, request);
    tokenCompartido = await apiPage.iniciaSesion();
});


Given('que el token es correcto y sesion es valida se emite documento con folio {int} y se recupera ID', async ({ page, request }, folio: number) => { 
        if (!tokenCompartido) {
            throw new Error('No se encontró ningún token guardado del paso anterior.');
        }
        const apiPage = new ApiPage(page, request);
        jsonRespuesta = await apiPage.emitir({ token: tokenCompartido, folio: folio })
});

Then('Se comprueba que documento corresponde a lo devuelto en busqueda', async ({ page, request }) => { 
        const apiPage = new ApiPage(page, request);
        idEmitido = (jsonRespuesta as any).id; 
        await apiPage.buscar(tokenCompartido, idEmitido,jsonRespuesta);
});

Given('que el token es correcto y sesion es valida se emite documento con folio {int}', async ({ page, request }, folio: number) => { 
        if (!tokenCompartido) {
            throw new Error('No se encontró ningún token guardado del paso anterior.');
        }
        const apiPage = new ApiPage(page, request);
        await apiPage.emitir({ token: tokenCompartido, folio: folio })
});

Then('    When filtro el listado de documentos por rut {string} y tipo {string}', async ({ page, request }, rut: string, tipoDTE:string) => { 
        const apiPage = new ApiPage(page, request);
        idEmitido = (jsonRespuesta as any).id; 
        await apiPage.buscar(tokenCompartido, idEmitido,jsonRespuesta);
});




