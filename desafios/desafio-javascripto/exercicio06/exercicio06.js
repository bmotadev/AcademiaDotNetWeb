// 6 – Crie um parágrafo com um texto como conteúdo. Crie 4 botões. Dois para trocar a cor da fonte, de branco para
// preto e vice-versa e outros dois para fazer o mesmo com o fundo do parágrafo. Use divs se julgar necessário.

const texto = document.querySelector("p");

function corDoTexto(cor) 
{
    texto.style.color = cor;
}

function corDeFundo(cor) 
{
    texto.style.backgroundColor = cor;
}