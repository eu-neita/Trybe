import './App.css';
import React from 'react';

class App extends React.Component {
constructor() {
  super()
  this.handlerClick = this.handlerClick.bind(this)
}
state = {
  countClicks: 0,
}

colorStatefunc = () => {
  if (this.state.countClicks % 2 === 0 ){
    return 'green'
}else{
  return 'red'
}
}

  handlerClick() {
    this.setState((anteriorState, props) => ({
      countClicks: anteriorState.countClicks + 1,
    }
    ))
  }
  render() {

  return (

    <button onClick={ this.handlerClick } style={{backgroundColor: `${this.colorStatefunc()}`}} >Click {this.state.countClicks}</button>
  )
  }
}

export default App;
