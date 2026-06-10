const form = document.getElementById("meuForm");

form.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const erro = document.getElementById("erro");

    if (nome.trim() === "") {
        event.preventDefault();
        erro.textContent = "O nome é obrigatório!";
        erro.style.color = "red";
    }

    if (!email.includes("@")) {
        event.preventDefault();
        erro.textContent = "E-mail inválido!";
    }
});