/*Mostrar numeros impares entre 1 e 10*/

for(var i = 1; i <= 10; i++) {
    if(i % 2 == 1) {
        alert(i);
    }
}

var soma = 0;
for(var i = 1; i <= 100; i++) {
    soma = soma + i;
}

alert(soma);

function alertaGeral() {
    for(var i = 1; i <= 5; i++)
    {
        return alert(i);
    }
}

