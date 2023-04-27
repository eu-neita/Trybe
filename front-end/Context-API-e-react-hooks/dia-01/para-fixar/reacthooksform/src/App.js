import React, { useState } from 'react';
import './App.css';

function App() {
  let [handleInputs, setHandle] = useState({
    fullName: '',
    age: 0,
    module: ''
  })

  const onChangeInputs = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setHandle((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    console.log(handleInputs);
  }
  return (
    <div className="App">
      <form className="App-header">
       <input type="text" name="fullName" onChange={ onChangeInputs } placeholder="Nome completo"/>
       <input type="number" name="age" onChange={ onChangeInputs }/>
       <div onChange={ onChangeInputs }>
       <label>
       <input type="radio" name='module' value="fundamentos"/>fundamentos
       </label>
       <input type="radio" name='module' value="front-end"/>front-end
       <label>
       <input type="radio" name='module' value="back-end"/>back-end
       </label>
       <label>
       <input type="radio" name='module' value="ciencia-da-computação"/>ciencia-da-computação
       </label>
       </div>
       <button>Submeter</button>
      </form>
    </div>
  );
}

export default App;
