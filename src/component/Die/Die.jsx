import React from "react";
import styles from "./Die.module.css";

const Die = (props) => {
  const style = {
    backgroundColor: props.isHeld ? "black" : "white",
    color: props.isHeld ? "white" : "black",
  };

  return (
    <div
      className={styles.container}
      style={style}
      onClick={() => props.handleClick(props.id, props.value)}
    >
      {props.value}
    </div>
  );
};

export default Die;
