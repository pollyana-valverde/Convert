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

