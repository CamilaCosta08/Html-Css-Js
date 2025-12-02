let usuarioSalvo = "camila";
let senhaSalva = "123";

function mostrarSenha() {
  const campo = document.getElementById("pass");
  campo.type = campo.type === "password" ? "text" : "password";
}

function fazerLogin() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  if (u === usuarioSalvo && p === senhaSalva) {
    msg.textContent = "";
    mostrarTela("telaBemVindo");
  } else {
    msg.textContent = "Usuário ou senha incorretos.";
  }
}

function mostrarCadastro() {
  mostrarTela("telaCadastro");
}

function cadastrar() {
  const novoUser = document.getElementById("novoUser").value;
  const novoPass = document.getElementById("novoPass").value;
  const msg = document.getElementById("msgCadastro");

  if (novoUser === "" || novoPass === "") {
    msg.textContent = "Preencha tudo, minha princesa!";
    return;
  }

  usuarioSalvo = novoUser;
  senhaSalva = novoPass;

  msg.textContent = "Conta criada! Agora volte e faça login.";
}

function voltarLogin() {
  mostrarTela("telaLogin");
}

function mostrarTela(id) {
  document.getElementById("telaLogin").style.display = "none";
  document.getElementById("telaCadastro").style.display = "none";
  document.getElementById("telaBemVindo").style.display = "none";

  document.getElementById(id).style.display = "block";
}