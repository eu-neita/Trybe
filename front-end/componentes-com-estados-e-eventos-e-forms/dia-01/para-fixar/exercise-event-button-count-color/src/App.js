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

  handlerClick() {
    this.setState((anteriorState, props) => ({
      countClicks: anteriorState.countClicks + 1,
    }
    ))
  }
  render() {
    const colorStatefunc = () => {
      if (this.state.countClicks % 2 === 0 ){
        return 'green'
    }else{
      return 'red'
    }
    }
  return (

    <button onClick={ this.handlerClick } style={{backgroundColor: `${colorStatefunc()}`}} >Click {this.state.countClicks}</button>
  )
  }
}

export default App;
