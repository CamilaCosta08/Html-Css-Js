window.onload = function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 800);
};

const toggleTheme = document.getElementById("toggleTheme");
if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("light");
        toggleTheme.textContent =
            document.body.classList.contains("light") ? "🌞" : "🌙";
    });
}


function toggleSenha(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
}

const olhoLogin = document.getElementById("toggleSenhaLogin");
if (olhoLogin) {
    olhoLogin.addEventListener("click", () => toggleSenha("loginSenha"));
}

const olhoCadastro = document.getElementById("toggleSenhaCadastro");
if (olhoCadastro) {
    olhoCadastro.addEventListener("click", () => toggleSenha("cadSenha"));
}

const btnCadastrar = document.getElementById("btnCadastrar");
if (btnCadastrar) {
    btnCadastrar.addEventListener("click", () => {
        const usuario = document.getElementById("cadUsuario").value;
        const senha = document.getElementById("cadSenha").value;
        if (usuario && senha) {
            localStorage.setItem("user", usuario);
            localStorage.setItem("pass", senha);
            window.location.href = "index.html";
        }
    });
}

const btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
    btnLogin.addEventListener("click", () => {
        const usuario = document.getElementById("loginUsuario").value;
        const senha = document.getElementById("loginSenha").value;
        if (
            usuario === localStorage.getItem("user") &&
            senha === localStorage.getItem("pass")
        ) {
            window.location.href = "painel.html";
        }
    });
}