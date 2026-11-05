import { Page, Locator, expect, APIRequestContext } from '@playwright/test';

export class ApiPage {
readonly page: Page;
readonly request: APIRequestContext;


constructor(page: Page, request: APIRequestContext) {
    this.page = page;
    this.request = request;
}

async iniciaSesion(){
    const requestdata = { "email": "admin@azurian.com", "password": "Azurian2026!" }

    const inicioSesion = await this.request.post('http://localhost:3000/api/auth/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: requestdata 
    }); 
    expect(inicioSesion.status()).toBe(200);
    const respuestaJson = await inicioSesion.json();
    const tokenRecuperado = respuestaJson.token; 
    return tokenRecuperado;
}

async emitir({ token, folio }: { token: string, folio: number }): Promise<any> {
    // @ts-ignore
    const TOKEN_BEARER = process.env.API_TOKEN || token;
    const LAB_RUN_ID = 'user-azurian-01';

    const requestdata = {
        "tipoDte": "DTE 33",
        "folio": folio,
        "rutReceptor": "20.045.769-2",
        "monto": 450000,
        "fechaEmision": "2026-09-28"
    };


    const nuevoDocumento = await this.request.post('http://localhost:3000/api/documents', {
        headers: {
            'Authorization': `Bearer ${TOKEN_BEARER}`,
            'x-lab-run-id': LAB_RUN_ID,
            'Content-Type': 'application/json'
        },
        data: requestdata 
    }); 
    expect(nuevoDocumento.status()).toBe(201);
    const cuerpoJson = await nuevoDocumento.json();
    return cuerpoJson;
}

async buscar(token:string,idEmitido:string,jsonprevio:JSON): Promise<any>{
    // @ts-ignore
    const TOKEN_BEARER = process.env.API_TOKEN || token;
    const LAB_RUN_ID = 'user-azurian-01';


    const documentoEmitido = await this.request.get('http://localhost:3000/api/documents/'+idEmitido, {
        headers: {
            'Authorization': `Bearer ${TOKEN_BEARER}`,
            'x-lab-run-id': LAB_RUN_ID,
            'Content-Type': 'application/json'
        }
    }); 
    expect(documentoEmitido.status()).toBe(200);
    const cuerpoJson = await documentoEmitido.json();
    expect(cuerpoJson).toEqual(jsonprevio);
}



async buscarPorRutyTipoDte(rut:string,tipoDTE:string){
    // @ts-ignore
    const TOKEN_BEARER = process.env.API_TOKEN || token;
    const LAB_RUN_ID = 'user-azurian-01';


    const documentoEmitido = await this.request.get('http://localhost:3000/api/documents?rut='+rut+'&tipoDte='+tipoDTE, {
        headers: {
            'Authorization': `Bearer ${TOKEN_BEARER}`,
            'x-lab-run-id': LAB_RUN_ID,
            'Content-Type': 'application/json'
        }
    }); 
    expect(documentoEmitido.status()).toBe(200);
    const cuerpoJson = await documentoEmitido.json();
    expect(cuerpoJson).toEqual(algo);
}







};
