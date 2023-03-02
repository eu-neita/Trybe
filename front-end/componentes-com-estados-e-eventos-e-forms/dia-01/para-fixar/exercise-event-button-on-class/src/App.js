import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.handlerClick.bind(this)
  // }

  // com a arrow function não preciso do constructor

  handlerClick = () => {
    console.log('clickou');
  }
  render() {
     return <button onClick={ this.handlerClick } >Click</button>
    }
}

export default App;
