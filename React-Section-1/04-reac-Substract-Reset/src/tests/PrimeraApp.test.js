import '@testing-library/jest-dom'
import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import{ shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en <PrimeraApp />', () => {
    
   /* test('de mostrar el mensaje "Hola, soy goku"', () => {
        //se requiere impotar import React from 'react'; para usar los JSX
        //necesitamos crear un archivo en el SRC  "setupTests.js" con esta importacion import '@testing-library/jest-dom/extend-expect;
        const saludo ="Hola, soy goku";
        //const wrapper =  render(<PrimeraApp saludo={saludo} />);
        //wrapper.getByText();       
        const { getByText } =  render( <PrimeraApp saludo={saludo} />);    
        expect( getByText(saludo) ).toBeInTheDocument();
    });*/
    test('debe de mostrar <PrmimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola, soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow(<PrimeraApp saludo = {saludo} subtitulo= {subtitulo}/>);

        const txtParrafo= wrapper.find('p').text().trim();
        
        expect(txtParrafo).toBe(subtitulo);
    })
    
    
})
