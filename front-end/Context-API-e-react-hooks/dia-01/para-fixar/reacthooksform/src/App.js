import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({});
  
  const onChangeInputs = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  return (
    <div className="App">
      <form className="App-header">
        <input type="text" name="fullName" value={inputs.fullName} onChange={ onChangeInputs } placeholder="Nome completo"/>
        <input type="number" name="age" value={inputs.age} onChange={ onChangeInputs }/>
        <div onChange={ onChangeInputs }>

          <label>
            <input type="radio" name='module' value="fundamentos"/>fundamentos
          </label>

          <label>
            <input type="radio" name='module' value="front-end"/>front-end
          </label>

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
