// 3 - Crie uma página com uma lista (select - RadioButton) com 4 opções de cores. Ao selecionar uma opção de cor,
// altere o plano de fundo da página para a cor específica

const fundo = document.querySelector("body");

 function mudarCor(cor) {
     fundo.style.backgroundColor = cor;

 }
