const inputValue = document.querySelector("input")
const para = document.querySelector("p")
const btn = document.querySelector("button") 

function factorial(n) {
    if (n < 0) throw new Error("Negative numbers not allowed");
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function getRowCoefficients(n) {
    const row = []
    for (i = 0; i <= n; i++) {
        const formula = factorial(n) / (factorial(i) * factorial(n - i))
        row.push(formula)
    }
    return row
}

btn.addEventListener("click", () => {
    render()
})

inputValue.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        render()
    }
})

function render(){
    if (inputValue.value === "") return
    let outputString = ""
    const maxRows = Number(inputValue.value)
    for(let n = 0; n <= maxRows; n++){
        const rowData = getRowCoefficients(n)
        outputString += rowData.join(" ") + "<br>"
    }
    para.innerHTML = outputString
    inputValue.value = ""
}