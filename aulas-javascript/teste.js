var teste2 = "World";

var n1= 50;
var n2 = 5.9;

var boooleano = true;

var u = undefined;
var n = null;

var obj = {
    id:1,
    nome: "Bruno"
};

var arrays = ["Bruno", "Mota", "Oliveira"];

var func = function(x, y) {
    return x + y;
}

var valor = 2;

if(valor == "2")
{
    alert("deu verdadeiro");
}
else
{
    alert("deu falso");
}

if(valor === "2")
{
    alert("deu verdadeiro");
}
else
{
    alert("deu falso");
}

var retorno = (valor === "2")?"verdadeiro":"falso";

var alunos = ["Bruno", "Mota", "Oliveira"];

for (var i = 0; i < alunos.length; i++) {
    alert(alunos[i]);
}

var nomeCompleto = "";
var professor = 
{
    nome: "Fabricio",
    sobrenome: "Londero"
}


for (p in professor) {
    nomeCompleto += professor[p] + " ";
}

alert(nomeCompleto);