import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas con Promesas', () => {
    test('getHroesByIdAsync', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroFound => {
                expect(heroFound).toBe(heroes[0]);
                done();
            });
    });

    test('getHeroesByIdAsync debe otner un error si el horoe no existe', ( done ) => {
        const id=10; //Id not exits

        getHeroeByIdAsync(id)
            .catch(heroesNotFound =>{
                expect(heroesNotFound).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
    
})
