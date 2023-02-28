import './App.css';
import Image from './Image'
import ImageCat from './cat-2083492_1280.jpg'

function App() {
  return (
    <Image source={ImageCat} alternativeText='Cute cat staring' />
  );
}

export default App;
