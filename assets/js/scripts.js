var currentNumber = document.getElementById("currentNumber");
var soma = document.getElementById("adicionar");
var subtracao = document.getElementById("subtrair");

soma.addEventListener("click", incrementar);
subtracao.addEventListener("click", decrementar);

function incrementar() {
    currentNumber.textContent = parseInt(currentNumber.textContent) + 1;
    checkLimit();
};

function decrementar() {
    currentNumber.textContent = parseInt(currentNumber.textContent) - 1;
    checkLimit();
}

function checkLimit() {
    (parseInt(currentNumber.textContent) == -10) ? subtracao.disabled = true : subtracao.disabled = false;

    (parseInt(currentNumber.textContent) < 0) ? currentNumber.style.color = 'salmon' : currentNumber.style.color = 'white';

    (parseInt(currentNumber.textContent) == 10) ? soma.disabled = true : soma.disabled = false;
}