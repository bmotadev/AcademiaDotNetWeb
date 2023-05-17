// 9 - Crie um formulário com os campos para cadastrar o usuário de um sistema (login, senha e confirmar senha). Permita
// que a página seja submetida apenas se todos os campos estiverem preenchidos, se os campos senha e confirma senha
// forem iguais e a senha possuir entre 6 e 10 caracteres.

function validacaoFormulario() {
    let senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha)
    {
        alert("Senhas divergentes");
        return false;
    }

    if(senha.length < 6 || senha.length > 10)
    {
        alert("A senha deve possuir entre 6 e 10 caracteres");
        return false;
    }

    alert("Usuário cadastrado com sucesso!");
    return true;
}