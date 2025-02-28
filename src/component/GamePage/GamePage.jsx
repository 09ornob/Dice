import React, { useState } from "react";
import styles from "./GamePage.module.css";
import Die from "../Die/Die";

const GamePage = () => {
  const [showRules, setShowRules] = useState(false);
  const [images, setImages] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [hasRolled, setHasRolled] = useState(false);
  const [dice, setDice] = useState([
    {
      id: 1,
      value: 1,
      isHeld: false,
    },
    {
      id: 2,
      value: 2,
      isHeld: false,
    },
    {
      id: 3,
      value: 3,
      isHeld: false,
    },
    {
      id: 4,
      value: 4,
      isHeld: false,
    },
    {
      id: 5,
      value: 5,
      isHeld: false,
    },
    {
      id: 6,
      value: 6,
      isHeld: false,
    },
  ]);

  function rollDice() {
    const random = Math.ceil(Math.random() * 6);
    setImages(random);

    if (selectedValue !== null) {
      if (random === selectedValue) {
        setScore((prevScore) => prevScore + random);
      } else {
        setScore((prevScore) => Math.max(0, prevScore - 2));
      }
    }

    setSelectedValue(null);
    setDice((prevDice) => prevDice.map((die) => ({ ...die, isHeld: false })));

    setHasRolled(true);
  }

  function isHeld(id, value) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: true } : { ...die, isHeld: false }
      )
    );
    setSelectedValue(value);
  }

  const diceElement = dice.map((content) => (
    <Die
      key={content.id}
      value={content.value}
      isHeld={content.isHeld}
      handleClick={isHeld}
      id={content.id}
    />
  ));

  function toggle() {
    setShowRules((prevShowRules) => !prevShowRules);
  }

  function resetScore() {
    setScore((prevScore) => 0);
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>

        <div className={styles.right}>
          <p className={styles.red}>
            {selectedValue === null
              ? "You have not selected any number"
              : `Selected: ${selectedValue}`}
          </p>
          <div className={styles.die}>{diceElement}</div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <img
          onClick={rollDice}
          src={`image/dice_${images}.png`}
          alt="Dice images"
        />
        <p>Click on Dice to roll</p>
        <button onClick={resetScore}>Reset Score</button>
        <button className={styles.black} onClick={toggle}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
        {showRules && (
          <div className={styles.showRules}>
            <h2>How to play dice game</h2>
            <ul>
              <li>Select any number</li>
              <li>Click on dice image</li>
              <li>
                after click on dice if selected number is equal to dice number
                you will get same point as dice
              </li>
              <li>if you get wrong guess then 2 point will be dedcuted </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
