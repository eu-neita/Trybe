

function textInputValidation() {

    const VALUE_INPUT_EMAIL = document.querySelector('#input_email').value;
    const VALUE_INPUT_NAME = document.querySelector('#input_name').value;
    const BOX_ABOUTME = document.querySelector('#textarea-1').value;
  
    if (VALUE_INPUT_EMAIL && VALUE_INPUT_NAME && BOX_ABOUTME){ // pode ser adicionados mais variaveis
        return true
        }
        else{
        return false
        }

  }

  function handleSubmit(event) {

  
    const validation = textInputValidation();
  
    if (validation === false) {
  
      alert('Dados inválidos');
  
    } else {
  
       alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  
     }
  
  }

  const SUBMIT_BUTTON = document.querySelector("#submit");
SUBMIT_BUTTON.addEventListener('click', (event) => {
event.preventDefault()
handleSubmit()
})