// 7 – Crie um botão + (mais) e outro – (menos) na mesma página do exercício anterior. Esses botões aumentam e
// diminuem o tamanho da fonte, respectivamente
let texto = document.querySelector("p");
let tamanhoDaFonte = 14;

function mais()
{
    tamanhoDaFonte += 2;
    texto.style.fontSize = tamanhoDaFonte + "px";
}

function menos()
{
    tamanhoDaFonte -= 2;
    texto.style.fontSize  = tamanhoDaFonte + "px";
}