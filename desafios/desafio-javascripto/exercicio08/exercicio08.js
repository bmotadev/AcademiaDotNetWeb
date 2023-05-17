// 8 – Ainda continuando no exercício 6, faça um botão que transforme todo o texto do parágrafo em maiúscula, e outro
// em minúscula.

let texto = document.querySelector("p");


function formatoTexto(formato) 
{
    texto.style.textTransform = formato;
}