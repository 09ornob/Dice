import React from "react";
import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="image/titleDice.png" alt="Dice Image" />
      </div>

      <div className={styles.right}>
        <h1>DICE GAME</h1>
        <button onClick={props.handleClick}>Play Now</button>
      </div>
    </div>
  );
};

export default Title;
