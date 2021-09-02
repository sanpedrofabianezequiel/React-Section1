import { shallow } from "enzyme"
import CounterApp from "../CounterApp"
import '@testing-library/jest-dom';
import React from 'react';


describe('Pruebas en el <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);


    beforeEach(()=>{
        wrapper =  shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('de de mostrar el valor por defecto del 100', () => {
        const numero =  100;
        const wrapper = shallow(<CounterApp value = { numero } />);
        const counterText =  wrapper.find('h2').text().trim();

        expect(counterText).toBe(`${numero}`);
    });
    test('debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });
    test('debe incrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });
    test('debe de colocar el valor por defecto en el btn reset', () => {
        const   wrapper =  shallow(<CounterApp value = {105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText =  wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    })
    
})
