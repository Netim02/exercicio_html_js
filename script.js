const form = document.getElementById("formComparador");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const resultadoComparacao = document.querySelector('.resultado');

function comparar(firstNumber, secondNumber){
    return firstNumber < secondNumber ? true : false;
};

form.addEventListener("submit", function (e){
    
    e.preventDefault();

    const mensagemMaiorFirst = `O número: <b>${firstNumber.value}</b> é maior que o número: <b>${secondNumber.value}</b>`;
    const mensagemMaiorSecond = `O número: <b>${secondNumber.value}</b> é maior que o número: <b>${firstNumber.value}</b>`;

    compararETrue = comparar(firstNumber.value, secondNumber.value);

    
    if(!compararETrue){
        
        
        resultadoComparacao.innerHTML = mensagemMaiorFirst;

        firstNumber.value = "";
        secondNumber.value = "";

        
    }else{
        resultadoComparacao.innerHTML = mensagemMaiorSecond;
        firstNumber.value = "";
        secondNumber.value = "";
    };
    
})




