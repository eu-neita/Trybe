import { React, Component } from 'react';
import { connect } from 'react-redux';

import { actionCreator, clickCounter } from './Redux/actions';
import './App.css';

class App extends Component {

  render() { 
    
    const { dispatch, countState, clickState  } = this.props;
    
    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    };

    return ( 
      <div className="App">
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={() => dispatchAll()}>Incrementar 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementar 5</button>
        <h2>Numero de Clicks: {clickState}</h2>
      </div>
     );
    }
  }
  
  const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clickState: state.counterReducer.clicks
  });

export default connect(mapStateToProps)(App);
