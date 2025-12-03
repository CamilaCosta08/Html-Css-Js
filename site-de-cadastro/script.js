document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Tema salvo
    const temaSalvo = localStorage.getItem("tema") || "claro";
    if (temaSalvo === "dark") body.classList.add("dark");

    // Alternar tema
    window.alternarTema = function () {
        const isDark = body.classList.contains("dark");
        if (isDark) {
            body.classList.remove("dark");
            localStorage.setItem("tema", "claro");
        } else {
            body.classList.add("dark");
            localStorage.setItem("tema", "dark");
        }
    };

    // Mostrar / esconder senha
    window.mostrarSenha = function (idCampo) {
        const campo = document.getElementById(idCampo);
        if (!campo) return;
        campo.type = campo.type === "password" ? "text" : "password";
    };

    // Navegação
    window.irCadastro = function () { window.location.href = "cadastro.html"; };
    window.voltarLogin = function () { window.location.href = "index.html"; };
    window.sair = function () { window.location.href = "index.html"; };

    // Cadastro
    window.cadastrar = function () {
        const novoUsuario = document.getElementById("novoUsuario").value.trim();
        const novaSenha = document.getElementById("novaSenha").value.trim();
        if (!novoUsuario || !novaSenha) { alert("Preencha todos os campos!"); return; }
        localStorage.setItem("user", novoUsuario);
        localStorage.setItem("pass", novaSenha);
        alert("Conta criada com sucesso!");
        window.location.href = "index.html";
    };

    // Login
    window.fazerLogin = function () {
        const usuario = document.getElementById("usuarioLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value.trim();
        const userSalvo = localStorage.getItem("user");
        const passSalvo = localStorage.getItem("pass");

        if (usuario === userSalvo && senha === passSalvo) {
            window.location.href = "painel.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    };
});