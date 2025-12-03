// mostrar ou esconder a senha
function mostrarSenha(idCampo) {
    const campo = document.getElementById(idCampo);
    campo.type = campo.type === "password" ? "text" : "password";
}

// ir para página de cadastro
function irCadastro() {
    window.location.href = "cadastro.html";
}

// voltar ao login
function voltarLogin() {
    window.location.href = "index.html";
}

// cadastrar usuário 
function cadastrar() {
    const usuario = document.getElementById("novoUsuario").value;
    const senha = document.getElementById("novaSenha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha tudo!");
        return;
    }

    localStorage.setItem("user", usuario);
    localStorage.setItem("pass", senha);

    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
}

// fazer login
function fazerLogin() {
    const usuario = document.getElementById("usuarioLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    const userSalvo = localStorage.getItem("user");
    const passSalvo = localStorage.getItem("pass");

    if (usuario === userSalvo && senha === passSalvo) {
        window.location.href = "painel.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
// sair
function sair() {
    window.location.href = "index.html";
}