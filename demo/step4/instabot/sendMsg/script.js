const number = document.querySelector(".number")
const range = document.querySelector("#customRange1")

range.addEventListener("input",()=>{
    number.textContent = range.value
    
})