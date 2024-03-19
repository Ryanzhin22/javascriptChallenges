const displayInput = document.getElementById("displayInput")
const allButtons = document.getElementById("allButtons")

isOperation = false
isDot = false

const elementNumber = (element) => {
    if(element == "." && isDot == false){
        displayInput.value += element
        isDot = true
    }else if(element == "." && isDot == true){
        console.log('ponto já utilizado')
    } else{
        displayInput.value += element
        isOperation = false
    }
}

const elementOperation = (element) => {
    if(isOperation == false){
        displayInput.value += element.innerText
        isOperation = true
        isDot = false
    } else if (isOperation == true && element.classList.contains("btnOperation")){
        displayInput.value = displayInput.value.slice(0,-1)
        displayInput.value += element.innerText
    }
}

const deleteOperation = () => {
    displayInput.value = displayInput.value.slice(0,-1)
}

const deleteAll = () => {
    displayInput.value = ""
    isOperation = false
}

allButtons.addEventListener("click", (e)=>{
    const clickedElement = e.target.innerText

    if(+clickedElement >= 0 || clickedElement == "."){
        elementNumber(clickedElement)   
        // Is number
    } else if(e.target.classList.contains('btnOperation')){
        elementOperation(e.target)
        // Is operation
    } else if(clickedElement == "C"){
        deleteOperation()
    } else if(clickedElement == "CE"){
        deleteAll()
    } else if(clickedElement == "="){
        displayInput.value = eval(displayInput.value)
    }

})


