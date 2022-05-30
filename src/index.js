import validator from "./validator.js";

//Nombre de formulario
//const formulario = document.getElementById('formCard');

//Nombre del input
//const cardNumbers = document.getElementById ('cardNumber')

//Resultado 
const resultCard = document.getElementById('result');
const resultName = document.getElementById('result2')

const buttonValidate= document.getElementById('validate');



/*formulario.addEventListener("submit", (event)=>{
    handleSubmitCard(event,formulario,resultCard)
});
*/
/*let x;

cardNumbers.addEventListener('input', (e)=>{

    x = cardNumbers.value;
    
    const number = validator.maskify(e.target.value);
    console.log(number)
    if(number !==""){
        cardNumbers.value = number.toString();

    }

});
*/

buttonValidate.addEventListener('click', (e) =>{
    e.preventDefault();
    
    const cardNumb = document.getElementById('cardNumber').value 
    
    const isValid =  validator.isValid(cardNumb)
    const name = document.getElementById("clientName").value

    if(isValid === true){
        resultCard.textContent = 'Tu tarjeta ' + validator.maskify(cardNumb) + ' es VALIDA' 
        resultName.textContent =  'Gracias ' + `${name} `.toUpperCase()      
    }else{        
        resultCard.textContent = 'Tu tarjeta ' + validator.maskify(cardNumb) + ' es INVALIDA' 
        resultName.textContent =  'Gracias ' + `${name} `.toUpperCase()       
    }
    
}); 
