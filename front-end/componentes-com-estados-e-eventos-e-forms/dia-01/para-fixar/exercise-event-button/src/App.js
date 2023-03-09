import './App.css';

function handleClick() {
  console.log('clickado')
}

function App() {
  return (
    <button onClick={handleClick} >Click</button>
  );
}

export default App;
