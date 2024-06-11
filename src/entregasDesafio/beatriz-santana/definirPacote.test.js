const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular o valor do pacote", () => {
   test("Pacote basico - 23horas", () => {
     const retornado = calcularPacote(23); 
     const esperado = "pacote_basico";  
     expect(retornado).toBe(esperado);
   });
   test("Pacote intermediário - 72 horas", () => {
    const retornado = calcularPacote(72); 
    const esperado = "pacote_intermediario";  
    expect(retornado).toBe(esperado);
  });
  test("Pacote premium - 100 horas", () => {
    const retornado = calcularPacote(100); 
    const esperado = "pacote_premium";  
    expect(retornado).toBe(esperado);
  });
});