import React, { useState } from "react";
import "./App.css";
import GamePage from "./component/GamePage/GamePage";
import Title from "./component/Title/Title";

function App() {
  const [isPlayingNow, setIsPlayingNow] = useState(false);

  function toggle() {
    setIsPlayingNow((prevIsPlayingNow) => !prevIsPlayingNow);
  }

  return (
    <div className="container">
      {isPlayingNow ? <GamePage /> : <Title handleClick={toggle} />}
    </div>
  );
}

export default App;
