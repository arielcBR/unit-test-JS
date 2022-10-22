// Importação bibliotecas
const calculadora = require("../../src/calculadora.js");
const massaDeTesteDivisao = require("../../vendors/massaUnidade.js")

// Funções de teste de unidade
test("Adição", () => {
    // 1 - Configuração
    // 1.1 - Dados de entrada
    let num1 = 5;
    let num2 = 7;

    // 1.2 - Resultado esperado
    let resultadoEsperado = 12;

    // 2 - Executa
    let resultadoAtual = calculadora.somarDoisNumeros(num1, num2);

    // 3 - Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

});

test("Subtração", () => {
    // Entradas
    let num1 = 12;
    let num2 = 5;

    // Saídas
    let resultadoEsperado = 12 - 5;

    // Executa
    let resultadoAtual = calculadora.subtrairDoisNumeros(num1, num2);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Multiplicação", () => {
    let num1 = 3;
    let num2 = 7;

    let resultadoEsperado = num1 * num2;

    let resultadoAtual = calculadora.multiplicarDoisNumeros(num1, num2);

    expect(resultadoAtual).toBe(resultadoEsperado);
})

// Data driven test (DDT) para a divisão
// Massa de dados é um conjunto de dados de entrada, Massa de teste é um conjunto de dados de entrada e resultados esperados
// Array (Tuplas)que contem a massa de teste

const massaDivisao = [
    [8, 4, 2],
    [7, 0, Infinity],
    [-13, 3, (-13 / 3)],
    [-20, 4, -5]
]

test.each(massaDivisao)("Divisao de %f por %f", (num1, num2, resultEsperado) => {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultEsperado);
});


// Massa de teste em formato Json
test.each(massaDeTesteDivisao.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Divida de %f por %f", (num1, num2, resultEsperado) => {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultEsperado);
});