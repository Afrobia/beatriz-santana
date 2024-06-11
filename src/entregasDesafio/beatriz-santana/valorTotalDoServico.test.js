const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("Calcular o valor total do projeto", () =>{
    test("Calcular projeto, com 2 funcionalidades - pacote Básico", () => {
        const valorHora = 30;
        const funcionalidades = ['formulario'];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 528;
        expect(esperado).toBe(retornado);
    })
    test("Calcular projeto, com 2 funcionalidades - pacote Básico", () => {
        const valorHora = 70;
        const funcionalidades = ['formulario',"setup",'otimizacao_seo','integracao_api_propria'];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 4390;
        expect(retornado).toBe(esperado);
    })
    test("Calcular projeto, com 2 funcionalidades - pacote Básico", () => {
        const valorHora = 70;
        const funcionalidades = ['formulario',"setup",'otimizacao_seo','integracao_api_propria'];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 4390;
        expect(retornado).toBe(esperado);
    })
    test("Caso cliente não retorne uma funcionalidade", () => {
        const valorHora = 70;
        const funcionalidades = [];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 0;
        expect(retornado).toBe(esperado);
    })
})