const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe("Calcular horas por projeto", () => {
    test('Calcular horas do projeto - Funcionalidade', () => {
        const listaDeFuncionalidade = ['formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidade);
        const esperado = 16;
        expect(esperado).toBe(retornado);
    })
    test('Calcular horas do projeto - Funcionalidades iguais', () => {
        const listaDeFuncionalidade = ['formulario','formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidade);
        const esperado = 32;
        expect(esperado).toBe(retornado);
    })
    test('Calcular horas do projeto - 3 funcionalidades diferentes', () => {
        const listaDeFuncionalidade = ['formulario', 'responsividade', 'construcao_1_pagina'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidade);
        const esperado = 40;
        expect(esperado).toBe(retornado);
    })
})