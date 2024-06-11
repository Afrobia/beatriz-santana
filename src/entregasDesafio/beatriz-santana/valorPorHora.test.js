const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe ('Calcular o valor por hora', () => {
    test('Testar valor hora - Renda mensal de 3000', () => {
        const esperado = calcularValorPorHora(3000)
        const retornado = 18
        expect(esperado).toBe(retornado)
    })
    test('Calcular valor hora - Renda mensal de 4000', () => {
            const esperado = calcularValorPorHora(4000)
            const retornado = 23
            expect(esperado).toBe(retornado)
    })
    test('Calcular valor hora - Renda mensal de 15000', () => {
        const esperado = calcularValorPorHora(15000)
        const retornado = 86
        expect(esperado).toBe(retornado)
})
})