// Crie um formulário que contenha os seguintes elementos: um campo select, dois inputs de tipo diferente e uma textarea . Feito isso, faça com que um desses elementos seja um componente controlado, ou seja, elemento do formulário controlado pelo Estado.

// Baixe a React Developer Tools e nela veja o dado, inserido no elemento controlado, sendo salvo no Estado.
import React from "react";

class Form extends React.Component{
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      textAreaInput: '',
    }
  }

  handleChange(event) {
    this.setState({
      textAreaInput: event.target.value,
    })
  }

render() {
  return(
    <div>
      <select></select>
      <input type='text' ></input>
      <input type='password' ></input>
      <textarea name='textAreaInput' value={this.state.textAreaInput} onChange={this.handleChange} ></textarea>
    </div>
  )
}
}

export default Form;