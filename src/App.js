import LoginModal from "./components/LoginModal";
import Register from "./components/RegisterModal";
import Chair from "./components/Chair";
import ChairsContainer from "./components/ChairsContainer";
import React from 'react';
import "./App.css";

function App() {
  function handleClick(e) {
    e.preventDefault();

    const chairsData = [];
    const chairs = document.querySelector(".container-chairs").children;

    let i = 0;
    for(let chair of chairs) {
      const data = [];

      // if(chair.style.backgroundColor ) {
      //   data[1] = 0;
      // } else if(chair.className == "chair--1") {
      //   data[1] = 1;
      // } else if(chair.className == "chair--2") {
      //   data[1] = 2;
      // }

      console.log(chair.style.color)
      chairsData[i] = data;

      i++;
    }
    console.log(chairsData);
  }
  const [chairStates, setChairStates] = React.useState([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0
  ])
  return (
    <div className="App">
      <div className="block"></div>
      <h1>Venda de Bilhetes</h1>
      <div className="options">
        <div><Chair chairState = {0}/>N/A</div>
        <div><Chair chairState = {1}/>Selecionado</div>
        <div><Chair chairState = {2}/>Ocupado</div>
      </div>
      {/* <LoginModal />
      <Register /> */}
      <ChairsContainer chairStates = {chairStates}/>
      <button onClick = {handleClick}>Clique para Reservar</button>
    </div>
  );
}

export default App;
