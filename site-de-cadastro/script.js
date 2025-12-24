window.onload = () => {
    setTimeout(() => {
        const p = document.getElementById("preloader");
        if (p) p.style.display = "none";
    }, 800);

    carregar();
};

const toggleTheme = document.getElementById("toggleTheme");
if (toggleTheme) {
    toggleTheme.onclick = () => {
        document.body.classList.toggle("light");
        toggleTheme.textContent =
            document.body.classList.contains("light") ? "🌞" : "🌙";
    };
}

function toggleSenha(id) {
    const i = document.getElementById(id);
    if (i) i.type = i.type === "password" ? "text" : "password";
}

const toggleSenhaLogin = document.getElementById("toggleSenhaLogin");
if (toggleSenhaLogin)
    toggleSenhaLogin.onclick = () => toggleSenha("loginSenha");

const toggleSenhaCadastro = document.getElementById("toggleSenhaCadastro");
if (toggleSenhaCadastro)
    toggleSenhaCadastro.onclick = () => toggleSenha("cadSenha");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const btnCadastrar = document.getElementById("btnCadastrar");
if (btnCadastrar) {
    btnCadastrar.onclick = () => {
        const user = document.getElementById("cadUsuario").value;
        const pass = document.getElementById("cadSenha").value;

        if (!user || !pass) return;

        usuarios.push({ user, pass, favs: [] });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        location.href = "index.html";
    };
}

const btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
    btnLogin.onclick = () => {
        const user = document.getElementById("loginUsuario").value;
        const pass = document.getElementById("loginSenha").value;

        const encontrado = usuarios.find(
            u => u.user === user && u.pass === pass
        );

        if (encontrado) {
            localStorage.setItem("logado", user);
            location.href = "painel.html";
        }
    };
}

const btnLogout = document.getElementById("btnLogout");
if (btnLogout) {
    btnLogout.onclick = () => {
        localStorage.removeItem("logado");
        location.href = "index.html";
    };
}

const receitas = [
    {
        nome: "Morango com Chocolate",
        nivel: "facil",
        ingredientes: [
            "1 caixa de morangos",
            "200g de chocolate ao leite"
        ],
        preparo: "Derreta o chocolate e mergulhe os morangos. Leve à geladeira por 15 minutos."
    },
    {
        nome: "Vitamina de Morango",
        nivel: "facil",
        ingredientes: [
            "6 morangos",
            "1 banana",
            "1 copo de leite"
        ],
        preparo: "Bata tudo no liquidificador até ficar cremoso."
    },
    {
        nome: "Torta de Morango",
        nivel: "medio",
        ingredientes: [
            "Bolacha",
            "Manteiga",
            "Creme",
            "Morangos"
        ],
        preparo: "Monte a base, adicione o recheio e finalize com morangos."
    },
    {
        nome: "Cheesecake de Morango",
        nivel: "dificil",
        ingredientes: [
            "Cream cheese",
            "Biscoito",
            "Manteiga",
            "Morangos"
        ],
        preparo: "Prepare a base, asse o recheio e finalize com calda de morango."
    }
];

const listaReceitas = document.getElementById("listaReceitas");

function carregar(filtro = "todas") {
    if (!listaReceitas) return;

    const user = usuarios.find(
        u => u.user === localStorage.getItem("logado")
    );

    if (!user) {
        location.href = "index.html";
        return;
    }

    listaReceitas.innerHTML = "";

    receitas
        .filter(r => filtro === "todas" || r.nivel === filtro)
        .forEach(r => {
            const div = document.createElement("div");
            div.className = "receita";

            const info = document.createElement("div");
            info.innerHTML = `<strong>${r.nome}</strong><br><small>${r.nivel}</small>`;
            info.style.cursor = "pointer";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = user.favs.includes(r.nome) ? "❤️" : "🤍";

            btn.onclick = (e) => {
                e.stopPropagation();
                if (user.favs.includes(r.nome)) {
                    user.favs = user.favs.filter(x => x !== r.nome);
                } else {
                    user.favs.push(r.nome);
                }
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                carregar(filtro);
            };

            const detalhes = document.createElement("div");
            detalhes.className = "detalhes";
            detalhes.innerHTML = `
                <p><strong>Ingredientes:</strong></p>
                <ul>${r.ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
                <p><strong>Preparo:</strong></p>
                <p>${r.preparo}</p>
            `;

            info.onclick = () => {
                div.classList.toggle("aberta");
            };

            div.appendChild(info);
            div.appendChild(btn);
            div.appendChild(detalhes);
            listaReceitas.appendChild(div);
        });
}

function filtrar(nivel) {
    carregar(nivel);
}