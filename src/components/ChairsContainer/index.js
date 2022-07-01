import React from "react";
import Chair from "../Chair";
import "./index.css";

const ChairsContainer = (props) => {
  const chairStates = props.chairStates

  function updateChairStates(id) {
    const chairsContainer = document.querySelector(".container-chairs");
    for(let chair of chairsContainer.children) {
      if(chair.id == id) {
        
      }
    }
  }
  return (
    <div className="container-chairs">
        {chairStates.map((state, key) => {
          return <Chair id={key+1} key={key} chairState={state} handleClick = {updateChairStates}/> 
        } )}
    </div>
  );
};
export default ChairsContainer;
