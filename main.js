
const form = document.getElementById("calcForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const total = Number(document.getElementById("valorCompra").value);

    let tDesconto = 0;
    let desconto = 0;

    if (total < 2008) {
        tDesconto = total;
    }
    else if (total >= 2008 && total < 5000) {
        desconto = total * 0.05;
        tDesconto = total - desconto;
    }
    else {
        desconto = total * 0.1;
        tDesconto = total - desconto;
    }

    document.getElementById("resultadoDesconto").textContent =
        "R$ " + desconto.toFixed(2).replace(".", ",");

    document.getElementById("resultadoTotal").textContent =
        "R$ " + tDesconto.toFixed(2).replace(".", ",");
});