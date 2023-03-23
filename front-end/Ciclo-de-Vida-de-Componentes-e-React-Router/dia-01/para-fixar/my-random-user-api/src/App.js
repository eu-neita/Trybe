
import './App.css';
import { Component } from 'react';

const URL = 'https://api.randomuser.me/';

class App extends Component{

  constructor() {
    super();

    this.state = { 
      user: undefined,
      loading: true,
     }
  }



  fetchRandomUser = async () => {
  const data = await fetch(URL);
  const response = await data.json();
  return this.setState({
    user: response,
    loading: false,
  })
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  render(){
    const {loading, user} = this.state
    const loadingElement = <span>Loading...</span>;

  return (
    <div className="App">
      <h1>Random User API</h1>
      {loading && loadingElement }
      {!loading
      && (
      <div>
        <img src={user.results[0].picture.thumbnail} alt='person'/>
        <span>Nome: {`${user.results[0].name.first} ${user.results[0].name.last}`}</span>
      </div>
        )
        }

    </div>
  );
}
}

export default App;
