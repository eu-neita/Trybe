import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      countClicks: 0,
    };
  }
  handleClick() {
    this.setState((anteriorState, _props) => ({
      countClicks: anteriorState.countClicks + 1,
      })
    )
    console.log(`quantas vezes clikou ${this.state.countClicks}`);
  }
  render() {
  return (
    <button onClick={this.handleClick}>Meu butão</button>
  );
 }
}

export default App;
