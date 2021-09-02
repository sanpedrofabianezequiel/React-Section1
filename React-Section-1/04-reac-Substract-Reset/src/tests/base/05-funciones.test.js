import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';


describe('Unit Tes 05-funciones', () => {
    
    test('getUser debe retornar un objeto ', () => {
        //arrange
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        //act
        const user =  getUser();
        //assert
        expect(user).toEqual(userTest);
    });

    test('getUserActivo debe retornar un objeto', () => {
        //arrange
        const nombre = 'Ezequiel'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }        
        //act
        const user =  getUsuarioActivo(nombre);
        //assert
        expect(user).toEqual(userTest);
    });
    
    
})
