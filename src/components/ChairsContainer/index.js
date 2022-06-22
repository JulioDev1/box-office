import React from "react";
import Chair from "../Chair";
import "./index.css";

const ChairsContainer = (props) => {
  const states = props.states
  return (
    <div className="container-chairs">
        {states.map((state, key) => {
          return <Chair id={key} key={key} state={state}/> 
        } )}
    </div>
  );
};
export default ChairsContainer;
