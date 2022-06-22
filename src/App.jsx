import LoginModal from "./components/LoginModal";
import Register from "./components/RegisterModal";
import Chair from "./components/Chair";
import ChairsContainer from "./components/ChairsContainer";
import "./App.css";

function App() {
  const states = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
  return (
    <div className="App">
      <h1>Venda de Bilhetes</h1>
      {/* <LoginModal /> */}
      {/* <Register /> */}
      <ChairsContainer states = {states}/>
      <button>Comprar</button>
    </div>
  );
}

export default App;
