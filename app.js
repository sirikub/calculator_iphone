const arrayButton = ['AC','+/-','%','÷', 
                    '7','8','9','×',
                    '4','5','6','−',
                    '1','2','3','+',
                    '0',',','=']

const listButton = arrayButton.map((elem, index)=>{
    return `<span tabindex="0" class="button child${index}">${elem}</span>`
}).join('')

document.querySelector('#listButton').innerHTML = listButton

document.querySelectorAll('.button').forEach((elem)=>{
    elem.addEventListener('click', function(){
        calculator(this.innerHTML)        
    })
})

let inputSumm = 0
const input = document.querySelector('#input')
const buttonAC = document.querySelector('.button.child0')

function calculator(button){     
    switch (button){ 
        case `${button.match(/[0-9]/)}`:
            buttonAC.innerHTML = "C"
            if (inputSumm == 0 && input.value == 0) {
                inputSumm = button         
                input.value = button                
            } else {             
                inputSumm += button         
                input.value += button                                
                if (inputSumm.length !== 0 && inputSumm.length !== 1) {
                    if ((inputSumm[inputSumm.length-2]).match(/[\/\+\-\*]/)){ 
                        input.value = button
                    }  
                }
            }           
            break        
        case "+":  
            input.value = eval(inputSumm)            
            inputSumm += '+'             
            break
        case '−':      
            input.value = eval(inputSumm)     
            inputSumm += '-'
            break
        case '÷':                       
            inputSumm += '/'             
            break
        case '×':   
            inputSumm += '*'              
            break
        case '+/-':         
            inputSumm > 0 ? inputSumm = -Math.abs(inputSumm) : inputSumm = -inputSumm 
            if (isNaN(inputSumm)) {                
                inputSumm = -input.value
                input.value = -input.value
            } else input.value = inputSumm            
            break        
        case 'C':
            buttonAC.innerHTML = "AC"
            input.value = 0 
            inputSumm = 0            
            break           
        case ',':
            buttonAC.innerHTML = "C" 
            input.value += ',' 
            inputSumm += '.'              
            break  
        case '%': 
            input.value = (input.value/100)
            inputSumm = input.value            
            break
        case '=':           
            input.value = eval(inputSumm)                      
            break 
    }           
}
