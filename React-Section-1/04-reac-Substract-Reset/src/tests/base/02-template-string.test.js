import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';


describe('Unit Tes 02-template-string', () => {
    
    test('getSaludo debe de retorna Hola ezequiel ', () => {
       //arrange
        const nombre = 'ezequiel';
       //act
        const saludo =  getSaludo(nombre);
       //assert
       expect(saludo).toBe('Hola '+ nombre); 
    })
    

    test('get Saludo debe retornar parametro Default \'Carlos\'', () => {
        //arrange
        const saludo =  getSaludo();
        //act

        //assert
        expect(saludo).toBe('Hola Carlos');
    })
    
})
