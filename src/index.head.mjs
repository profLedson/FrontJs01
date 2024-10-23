// REFERENCIAR ELEMENTOS COM JS
const app = document.querySelector("#app");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btnCalcular = document.querySelector("#btn-calcular");
const btnLimpar = document.querySelector("#btn-limpar");

const resultados = document.querySelector(".resultados");
const soma = document.querySelector(".soma");
const subtracao = document.querySelector(".subtracao");
const multiplicacao = document.querySelector(".multiplicacao");
const divisao = document.querySelector(".divisao");

// CRIAR A FUNÇÃO - refatorar ou melhorar (+ - * /)
function calcular() {
  const n1 = Number(numero1.value); // CONVERSÃO P/ NUMBER
  const n2 = Number(numero2.value); // CONVERSÃO P/ NUMBER

  if (n1 !== 0 && n2 !== 0) {
    if (typeof n1 === "number" && typeof n2 === "number") {
      soma.innerHTML = `A soma de ${n1} e ${n2} é: ${n1 + n2}`;
      subtracao.innerHTML = `A subtração de ${n1} e ${n2} é: ${n1 - n2}`;
      multiplicacao.innerHTML = `A multiplicação de ${n1} e ${n2} é: ${
        n1 * n2
      }`;
      divisao.innerHTML = `A divisão de ${n1} e ${n2} é: ${(n1 / n2).toFixed(
        2
      )}`;

      resultados.classList.add("exibir");
      resultados.classList.remove("ocultar");
    }
  }
}
function limparFormulario() {
  const n1 = numero1.value; // REFERENCIA DO NÚMERO 1
  const n2 = numero2.value; // REFERENCIA DO NÚMERO 2

  resultados.classList.add("ocultar");
  resultados.classList.remove("exibir");
  document.querySelector("#numero1").focus(); //FOCA NO N1

  if (n1 || n2) {
    const form = document.querySelector("form");
    form.reset(); // LIMPA O FORMULÁRIO
  }
}
// ADICIONAR ESCUTADOR DE EVENTOS
btnCalcular.addEventListener("click", function (evento) {
  evento.preventDefault(); // DEIXA DE ATUALIZAR...
  calcular();
});
btnLimpar.addEventListener("click", function (evento) {
  evento.preventDefault();
  limparFormulario();
});
