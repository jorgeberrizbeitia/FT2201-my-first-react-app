import logo from './logo.svg';
import './App.css'; // se importan una vez y aplican para todos los componentes internos

import Restaurant from "./pages/Restaurant"

function App() {

  return (
    <div className="App">
      {/* <h1>Hola React</h1> */}

      <Restaurant />

    </div>
  );
}

export default App;
