//Cotação de moedas do dia
const USD = 5.34;
const EUR = 6.27;
const GBP = 7.19;

//Obtendo os elementos
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// manipulando o input amount pra receber somente númros
amount.addEventListener("input", () => {

    //Verifica caracteres de texto
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "") // Substitui o texto por nada

});

//Captando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
};

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrentBRL(price)}`;

        let total = price * amount;
        total = formatCurrentBRL(total).replace("R$", "");

        result.textContent = `${total} Reais`;

        footer.classList.add("show-result"); 
        
    } catch (error) {
        console.log(error);
        footer.classList.remove("show-result");
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

// Formata a moeda em BRL
function formatCurrentBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}