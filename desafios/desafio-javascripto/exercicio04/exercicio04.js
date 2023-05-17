// 4 – Crie um parágrafo (<p>) com um texto como conteúdo. Adicione um botão que, ao ser clicado, oculte ou mostre o
// texto do parágrafo.

function someAparece() 
{
    const texto = document.querySelector("p");

    if(texto.style.display === "none") 
    {
        texto.style.display = "block";
    }
    else 
    {
        texto.style.display = "none";
    }
}