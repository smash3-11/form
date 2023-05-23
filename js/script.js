


let form = document.querySelector('.form')
let submit = document.querySelector('#submit')
let inputs = document.querySelectorAll('.input')
let req_Inputs = document.querySelectorAll('.required')


let all = document.querySelector('#all')
let need = document.querySelector('#need')
let success = document.querySelector('#success')
let error = document.querySelector('#error')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    restartForm()

    let allInputs = inputs.length
    let reqInputs = req_Inputs.length
    let successCount = 0;
    let errorCount = 0;

    for(let input of req_Inputs) {
        if(input.value) {
            successCount++
        }
        else  {
            input.style.border = '2px solid red'
            submit.style.background = 'red'
            
            errorCount++
        }
    }

    if(errorCount == 0) {
        for(let input of inputs) {
            input.value = ''
            submit.style.background = 'blue'
        }
       
    }

    all.textContent = `All: ${allInputs}`
    need.textContent = `Need: ${reqInputs}`
    success.textContent = `Success:${successCount} / ${reqInputs}`
    error.textContent = `Error:${errorCount} / ${reqInputs}`
})

function restartForm() {
    for(let input of inputs) {
        input.style.border = '1px solid black'
    }
}   