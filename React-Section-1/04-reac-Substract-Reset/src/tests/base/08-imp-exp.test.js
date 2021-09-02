import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../data/heroes';

describe('Pruebas de funciones de Heroes', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const heroe =  getHeroeById(id);

        const heroesData =  heroes.find( x => x.id === id);//Chekiamos en nuestra propia base de datos

        expect(heroe).toEqual(heroesData);
    })
    
    test('debe retornar un UNDEFINED si Heroe no existe', () => {
        const id =10;//10 not exist
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })
    
    test('getHroesByOwner debe retorn un arreglo de DC ', () => {
        const owner='DC';
        const heroesList = getHeroesByOwner(owner);
        const heroesData =  heroes.filter( x => x.owner ===owner);
        expect(heroesList).toEqual(heroesData);
    });

    test('getHroesByOwner debe retorn un arreglo de heroes de Marvel ', () => {
        const owner='Marvel';
        const heroesList = getHeroesByOwner(owner);
        expect(heroesList.length).toBe(2);
    })
    
})


