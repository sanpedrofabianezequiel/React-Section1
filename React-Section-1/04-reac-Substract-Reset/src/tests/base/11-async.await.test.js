import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('Pruebas con async-await y Fetch', () => {
    test('getImagen debe retornar la URL de la image',  async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
        //expect(url.includes('https://')).toBe(true);
    })
    
})
