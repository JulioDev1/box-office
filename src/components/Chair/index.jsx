import React from "react";
import "./index.css";


const Chair = (props) => {
  const id= props.id;
  const [state, setState] = React.useState(props.state);

  function handleClick() {
    if(id == 1) {
      setState(0);
    }
    
    if(id == 0) {
      setState(1);
    }
   }
  return <div className={`${id} chair chair--${state}`} onClick={handleClick}></div>;
};

export default Chair;
