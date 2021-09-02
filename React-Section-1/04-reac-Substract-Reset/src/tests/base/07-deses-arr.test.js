import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en destructuracion', () => {
    test('retornaArreglo debe retornar un string y unnumero', () => {
       const [letras,numero] =  retornaArreglo();//['ABC',123];

       expect(letras).toBe('ABC');
       expect(typeof letras).toBe('string');

       expect(numero).toBe(123);
       expect(typeof numero).toBe('number');
    });
    
})//54
