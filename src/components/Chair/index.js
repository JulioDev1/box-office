import { isFocusable } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./index.css";

const Chair = (props) => {
  const id = props.id;
  const [state, setState] = React.useState(props.chairState);
  const updateChairStates = props.handleClick

  function handleClick() {
    if(state == 0) {
      setState(1);
    } else if(state == 1) {
      setState(0);
    }
  }

  return <div className={`${id} chair chair--${state}`} onClick={handleClick}></div>;
};

export default Chair;
