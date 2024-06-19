//seleção
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplicator-operations")
const multiplicationTitle = document.querySelector("#multiplicator-table span")

//funções
const createTable = (number, multiplicatorNumber) => {

    multiplicationTable.innerHTML = "";
    
    for(i = 1; i <= multiplicatorNumber ; i++) {
        const result = numberInput.value * i;
        
        const template = `<div class="row">
                <div class="operations"> ${numberInput.value} x ${i} =</div>
                <div class="result">${result}</div>
                </div>`

        const parser = new DOMParser
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row); 
        multiplicationTitle.innerHTML = numberInput.value
    }

};

//eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber)return;

    createTable(multiplicationNumber, multiplicatorNumber)

});