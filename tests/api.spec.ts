import { test, expect } from '@playwright/test';

// @ts-ignore
const TOKEN_BEARER = process.env.API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLWF6dXJpYW4tMDEiLCJlbWFpbCI6ImFkbWluQGF6dXJpYW4uY29tIiwibmFtZSI6IkFkbWluaXN0cmFkb3IgQXp1cmlhbiIsInJvbGUiOiJRQSBMYWIgUGFydGljaXBhbnQiLCJpYXQiOjE3OTM3MzMzMzYsImV4cCI6MTc5MzczNjkzNn0.55mfX8RThow18gLgapDU97pikjCD5KU-bBdeLqxMQeU';
const LAB_RUN_ID = 'user-azurian-01'; 

// 📌 PASA EL FIXTURE { page, request } AQUÍ ABAJO:
test('El último documento creado por API se visualiza en la grilla web', async ({ page, request }) => {
        const nuevoDocumento = await request.post('/api/documents', {
        headers: {
            'Authorization': `Bearer ${TOKEN_BEARER}`,
            'x-lab-run-id': LAB_RUN_ID,
            'Content-Type': 'application/json'
        },
        data: {
            "tipoDte": "DTE 33",
            "folio": 10500,
            "rutReceptor": "20045769-2",
            "monto": 450000,
            "fechaEmision": "2026-09-28"
        }
    });
    
    expect(nuevoDocumento.status()).toBe(201);
 
    await page.goto('http://localhost:3000'); 
    
    const primeraFilaGrilla = page.locator('table[aria-label="Tabla de Documentos Tributarios"] tbody tr').first();
    await expect(primeraFilaGrilla).toContainText('10500');
});
